# Test page

Id odio exercitationem a a doloribus libero. <span class="testing">Dolor saepe unde et voluptatum est excepturi. Ut porro sequi voluptas.</span> Quibusdam iste inventore tenetur repellendus assumenda.

Aspernatur voluptatem aut voluptatem nemo et nisi cupiditate. In tempora magni quo numquam vel excepturi consequatur aspernatur. <mark>Nisi sed quaerat velit velit aut nobis. Quo rem sit nam dolorem dolor cupiditate. Libero consequatur occaecati incidunt.</mark> Maxime beatae est sapiente sit. Ipsa ipsum nisi et aut coom voluptatum vero repellat. Iure fuga nesciunt fugit dignissimos eveniet.

## Typography

Body text:

> General Sans, size 0, 420

Header text:

> <span style="font-family: var(--font-display); font-weight: 666; font-size: var(--s1); color: var(--ctp-subtext0);">Poppins, size 4 to 1, 666</span>

Code:

> <span style="font-family: var(--font-code);">Space Mono, size 0, 400</span>

Toki Pona - sitelen Lasina:

> <span class="font-tp-sl">Nunito, size 0, 600</span><br />
> bold: <b class="font-tp-sl">Nunito, size 0, 900</b>

Toki Pona - sitelen pona:

> <span class="font-tp-sp">\[FAIRFAX PONA HD], suli nanpa \[0], 400</span>

### sitelen pona

::TP{sp}
toki toki
::

[Read more about Fairfax Pona HD](https://www.kreativekorp.com/software/fonts/fairfaxponahd/)

#### sandbox

> <span lang="tok-x-stlnpona" class="testing">SITELEN PONA.<br />
> toki-pona<br /></span>

cartouched names

> <span lang="tok-x-stlnpona">jan \[tonsi en nanpa pan ijo\]<br />
> tonsi \[tonsi en:: pi:: \]<br />
> \[ten2....pi::]</span>

combined characters

> <span lang="tok-x-stlnpona">kala-lili kala+lili kala^lili kala\*lili</span>

`<ruby>` annotations

> <span lang="tok-x-stlnpona">ma <ruby>\[kasi alasa nasin awen telo a\] <rp>(</rp><rt lang="tok-Latn"><mark>Kanata</mark></rt><rp>)</rp><rtc lang="tok-Latn">Kanata</rtc></ruby> li suli</span>

extended prepositions and <span lang="tok-Latn">pi</span> <span lang="tok-x-stlnpona">pi</span>

> <span lang="tok-x-stlnpona">jan pi (toki-pona) li jan pi (pona mute)<br />
> jan awen (pona) kepeken (ilo ni)<br />
> jan awen pona kepeken ilo ni<br />
> mi tawa (tomo mi)<br />
> \{mi} awen (lon tomo)</span>

manual override alternatives (and some interesting rare <i lang="tok-Latn">sitelen</i>, it's just a sandbox more or less)

> <span lang="tok-x-stlnpona">toki+pona&#8203;akesi&#8203;akesi1&#8203;namako&#8203;namako1&#8203;wile&#8203;wile1&#8203;jaki&#8203;jaki&#8203;jaki&#8203;jaki-jaki&#8203;jaki+jaki&#8203;mu&#8203;mu1&#8203;mu2&#8203;to&#8203;kijetesantakalu&#8203;$&#8203;uta&#8203;uta1&#8203;sike&#8203;lanpan<br />
> tonsi&#8203;kamalawala&#8203;misa4&#8203;misa2&#8203;misa&#8203;puwa&#8203;ijo+ni+li+seme&#8203;toki+pona&#8203;toki-pona&#8203;jans&#8203;wuwojiti&#8203;enko&#8203;enko2&#8203;lape<br />
> sona-pona&#8203;la&#8203;to</span>

`<q>` tag

> <span lang="tok-x-stlnpona">jan <ruby>\[SONJA] <rp>(</rp><rt lang="tok-Latn">Sonja</rt><rp>)</rp></ruby> li pali e lipu pu <mark><q>ale li pona</q></mark>.</span>

numbers 1 &ndash; 20

> <span lang="tok-x-stlnpona">wan, tu, tu-wan, tu-tu, luka, luka-wan, luka-tu, luka-tu-wan, luka-tu-tu, luka-luka, luka-luka-wan, luka-luka-tu, luka-luka-tu-wan, luka-luka-tu-tu, luka-luka-luka, luka-luka-luka-wan, luka-luka-luka-tu, luka-luka-luka-tu-wan, luka-luka-luka-tu-tu, mute</span>

regular symbols
> <span lang="tok-x-stlnpona">?!@#$%^&*+=",.&ldquo;&rdquo;;:</span>

#### <span lang="tok-Latn">sitelen pona</span> <span lang="tok-x-stlnpona">sitelen-pona</span> as body text

<span lang="tok-x-stlnpona">o toki e moku.<br />mi pali pakala. mi moku e pan linja pi namako seli mute mute a. sewi seli ike a. uta mi li ken pana kon e seli. mi o telo lete mute. u.</span>

#### variants

font default

> <span style="font-feature-settings: 'kern' 1" lang="tok-x-stlnpona">akesi kala soko meso epiku jaki jaki jaki jaki mi sina ona</span>

preferred alternatives

> <span style="font-feature-settings: 'kern' 1, 'cv70', 'cv77', 'cv80', 'cv90', 'cv91', 'ss19'" lang="tok-x-stlnpona">akesi kala soko meso epiku jaki jaki jaki jaki mi sina ona</span>

stylesheet settings

> <span lang="tok-x-stlnpona">akesi kala soko meso epiku jaki jaki jaki jaki mi sina ona</span>

#### the `<TP>` component

sitelen Lasina

> [toki jan ale o]{.tp-sl}

::TP
toki jan ale o
::

sitelen pona

> [toki jan ale o]{.tp-sp}

::TP{sp}
toki jan ale o
::

## Sizing

::ELStack{space=0 style="line-height: 1"}
<span style="font-size: var(--s-5)">var(--s-5)</span><br />
<span style="font-size: var(--s-4)">var(--s-4)</span><br />
<span style="font-size: var(--s-3)">var(--s-3)</span><br />
<span style="font-size: var(--s-2)">var(--s-2)</span><br />
<span style="font-size: var(--s-1)">var(--s-1)</span><br />
<span style="font-size: var(--s0)">var(--s0)</span><br />
<span style="font-size: var(--s1)">var(--s1)</span><br />
<span style="font-size: var(--s2)">var(--s2)</span><br />
<span style="font-size: var(--s3)">var(--s3)</span><br />
<span style="font-size: var(--s4)">var(--s4)</span><br />
<span style="font-size: var(--s5)">var(--s5)</span>
::

## Every Layout components

### ELStack

Component `based` on [Every Layout: Stack](https://every-layout.dev/layouts/stack/) (license required for viewing).

#### Basic example

::ELStack

<span style="font-family: var(--font-display); font-weight: 666; font-size: var(--s2); color: var(--ctp-subtext0);">Some text goes here</span>

![350x150 placeholder image](https://images.placeholders.dev/?width=350&height=100)

Some text goes here. <span class="testing">It is a paragraph, which means it can contain lines, sentences, text, text, more text.</span> And so on, and so further.
::

### ELBox

::ELBox
hello world
::

::ELBox{invert}
hello world
::
