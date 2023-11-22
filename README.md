# libertine

![Endpoint Badge](https://img.shields.io/npm/dt/libertine)
![Static Badge](https://img.shields.io/badge/License-GPL--3.0-blue)

Mommy's here to support you when running... Everything? ❤️

Based on [cargo-mommy](https://github.com/Gankra/cargo-mommy).

# Installation

Install libertine like you would any other node module.

```text
$ npm i libertine -g
```

# Usage

Run whatever command you would normally but add `libertine` beforehand.

```text
$ libertine echo test
> test
> what a good girl you are~ 💞 
```

You can automate this process on any given operating system using aliases.

# Configuration

Mommy will read the following environment variables to make her messages better for you~ ❤️

* `MOMMYS_LITTLE` - what to call you~ (default: "girl")
* `MOMMYS_PRONOUNS` - what pronouns mommy will use for themself~ (default: "her")
* `MOMMYS_ROLES` - what role mommy will have~ (default "mommy")
* `MOMMYS_EMOTES` - what emotes mommy will have~ (default "❤️/💖/💗/💓/💞")
* `MOMMYS_COLORS` - possible colors mommy's messages will be, ansii options separated by an underscore (default "1_0")

All of these options can take a `/` separated list. Mommy will randomly select one of them whenever she talks to you~

For example, the phrase "mommy loves her little girl~ 💞" is "CARGO_MOMMYS_ROLE loves CARGO_MOMMYS_PRONOUNS little CARGO_MOMMYS_LITTLE~"

So if you set `MOMMYS_ROLES="daddy"`, `MOMMYS_PRONOUNS="his/their"`, and `MOMMYS_LITTLE="boy/pet/baby"` then you might get any of

* daddy loves their little boy~ ❤️
* daddy loves his little pet~
* daddy loves their little baby~ 💗

And so on~ 💓

Mommy will also pull from the original CARGO_ versions of these environment variables if these are not set.

# Configuration (kink)

<details>

<summary>
<b>THIS IS NSFW, STOP READING IF YOU WANT MOMMY TO REMAIN INNOCENT!</b>
</summary>

...

...

Good pet~ ❤️

All of mommy's NSFW content is hidden behind MOMMYS_MOODS, where "thirsty" is heavy teasing/flirting and "yikes" is full harsh dommy mommy kink~

You can enable "true mommy chaos mode" by setting `MOMMYS_MOODS="chill/thirsty/yikes"`, making mommy oscillate wildly between light positive affirmation and trying to break you in half~

* `MOMMYS_MOODS` - how kinky mommy will be~ (default: "chill", possible values "chill", "thirsty", "yikes")
* `MOMMYS_PARTS` - what part of mommy you should crave~ (default: "milk")
* `MOMMYS_FUCKING` - what to call mommy's pet~ (default: "slut/toy/pet/pervert/whore")

-----

**Here's some examples of mommy being thirsty~ ❤️**

*tugs your leash*
that's a VERY good girl~ 💞

*smooches your forehead*
good job~

are you just keysmashing now~?
cute~ 💖

if you don't learn how to code better, mommy is going to put you in time-out~ 💓

-----

**And here's some examples of mommy being yikes~ 💞**

good slut~
you've earned five minutes with the buzzy wand~ 💗

*slides her finger in your mouth*
that's a good little toy~ ❤️

get on your knees and beg mommy for forgiveness you pervert~

mommy is starting to wonder if you should just give up and become her breeding stock~ 💗

</details>

# Licensing
mommy likes freedom, but her creator is a possessive girl, so libertine is licensed under the [GPL](LICENSE-GPL).