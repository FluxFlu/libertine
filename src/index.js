#!/usr/bin/env node

/*
 *  `Libertine` is a recreation of the `cargo-mommy` software that can be used with any possible program.
 *   Copyright (C) 2023  Missy "FluxFlu"
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const child_process = require("node:child_process");
const fs = require("fs");
const path = require("path");
const { finished } = require("node:stream");

const readJson = filename => JSON.parse(fs.readFileSync(path.join(__dirname, filename + ".json"), "utf-8"));

const responseList = readJson("responses");

const defaultOptions = readJson("defaultOptions");

function parseOption(variable) {
    const availableOptions = (
        process.env[variable] ||
        process.env["NPM_" + variable] ||
        process.env["CARGO_" + variable] ||
        defaultOptions[variable].join('/')
    ).split('/');
    return availableOptions[Math.floor(Math.random() * availableOptions.length)]
}

function selectResponse(type) {
    const mood = parseOption("MOMMYS_MOODS");
    const responses = responseList[mood][type];
    return responses[Math.floor(Math.random() * responses.length)];
}

function substituteValues(response) {
    const color = parseOption("MOMMYS_COLORS").split('_');
    return (
        `\x1b[${color[0]};${color[1]}m` +
        response
            .replaceAll("MOMMYS_PRONOUN", parseOption("MOMMYS_PRONOUNS"))
            .replaceAll("MOMMYS_ROLE", parseOption("MOMMYS_ROLES"))
            .replaceAll("AFFECTIONATE_TERM", parseOption("MOMMYS_LITTLE"))
            .replaceAll("DENIGRATING_TERM", parseOption("MOMMYS_FUCKING"))
            .replaceAll("MOMMYS_PART", parseOption("MOMMYS_PARTS"))
        + ' ' + parseOption("MOMMYS_EMOTES") + "\x1b[0m"
    )
}

let responseSent = false;
function sendResponse(message) {
    if (responseSent) return;
    responseSent = true;
    let response = selectResponse(+message.toString() ? "negative" : "positive");
    console.log(substituteValues(response));
}

function cleanup(error) {
    sendResponse(error)
    process.exit(0);
}

function runCommand(command, args) {
    
    const cmd = child_process.spawn(command, args, { shell: true, windowsHide: true });
    let fallbackError = 0;

    const kill = () => {
        cmd.removeAllListeners();
        process.removeAllListeners();
        cmd.stdin.destroy();
        cmd.stdout.destroy();
        cmd.stderr.destroy();
        if (process.platform == "win32")
            child_process.exec('taskkill /pid ' + cmd.pid + ' /T /F', () => cleanup(fallbackError));
        else {
            cmd.kill("SIGKILL");
            cleanup(fallbackError);
        }
    }

    cmd.stdout.on("data", message => {
        console.log(message.toLocaleString());
    })

    cmd.stderr.on("data", message => {
        console.log(message.toLocaleString());
        fallbackError = 1;
    })

    cmd.addListener("close", message => {
        sendResponse(message);
    });

    // process.on("beforeExit", kill);
    process.on("exit", kill);
    process.on("SIGINT", kill);
    process.on("SIGUSR1", kill);
    process.on("uncaughtException", kill);
}

function displayHelp() {
    console.log("Libertine  Copyright (C) 2023  Missy \"FluxFlu\"");
    console.log("This program comes with ABSOLUTELY NO WARRANTY.");
    console.log("This is free software, and you are welcome to redistribute it under certain conditions.");
    const readme_path = path.join(__dirname, "../README.md");
    if (fs.statSync(readme_path)) {
        console.log("");
        console.log("Read the README at " + readme_path + " for more information.");
    } else {
        console.log("");
        console.log("Read the README for more information.");
    }
    process.exit(0);
}

process.argv.splice(0, 2);
if (process.argv.length == 0 || process.argv[0] == '--help')
    displayHelp();

runCommand(process.argv.shift(), process.argv);