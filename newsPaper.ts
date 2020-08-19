/* NewsPaper Analogy */

import { CustomObservable } from "./observerPattern";

let newsPaper = new CustomObservable();

const hindustanTime = (news) => { console.log(`%c HindustanTimes \n\n\n ${news}`,"color: red;font-style:cursive;padding:1px")};

const theHindu = (news) => { console.log(`%cThe Hindu \n\n\n${news}`,"color: black;font-weight: bold;padding:1px")};

newsPaper.subscribe(hindustanTime);
newsPaper.subscribe(theHindu);

newsPaper.next("india Win the all world cup in all sports of the word");
