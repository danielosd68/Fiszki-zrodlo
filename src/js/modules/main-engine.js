import flashcards from '../../data/flashcards.json';



class FlashCard {
    constructor() {
        this.title = document.querySelector('.word');
        this.container = document.querySelector('.content');
        this.progressArray = [];
        let isEnded = false;
        const translationWord = document.querySelector('.translation');
        const random = document.querySelector('.random');
        const howFlash = flashcards.flashcard.length;
        const click = random.addEventListener('click', () => {

            if (this.progressArray.length == 30) {
                this.title.innerHTML = "Opracowano wszystkie słówka. <br>Gratulacje!";
                this.changeBgColor('black');
                this.title.classList.add('ended');
                this.title.style.transition = 'all 0.3s ease-in-out';
                isEnded = true;
                //this.test();
                removeEventListener(click);
            }

            let num = Math.round((Math.random() * howFlash)) + 1;
            //alert(num);

            /*label: for (let i = 0; i < progressArray.length; i++) {
                if (progressArray[i] == num) {
                    num = Math.floor(Math.random() * howFlash) + 1;
                    //alert(`Poprawione: ${num}`);
                    continue label;
                }
            }*/

            loop: for (let el of this.progressArray) {
                if (el == num) {
                    num = Math.floor(Math.random() * howFlash) + 1;
                    continue loop;
                }
            }

            this.progressArray.push(num);

            let title = flashcards.flashcard[num - 1].word;
            let translation = flashcards.flashcard[num - 1].translation;
            this.title.innerHTML = flashcards.flashcard[num - 1].word;
            let isChecked = false;
            this.changeBgColor('black');

            this.title.addEventListener('click', e => {
                if (isChecked == false) {
                    if (isEnded == true) {
                        this.changeBgColor('black');
                        this.translationWord.innerHTML = "Opracowano wszystkie słówka. <br>Gratulacje!";
                    }
                    else {
                        this.changeBgColor('#454561');
                        this.translationWord.innerHTML = translation;
                        isChecked = true;

                        
                        
                    }



                }
                else {
                    if (isEnded == true) {
                        this.changeBgColor('black')
                        this.translationWord.innerHTML = "Opracowano wszystkie słówka. <br>Gratulacje!";
                    }
                    else {
                        this.changeBgColor('black');
                        this.title.innerHTML = title;
                        isChecked = false;
                    }

                }
            });

        });


    }

    changeBgColor(color) {
        this.title.style.backgroundColor = color;
        this.title.style.transition = 'background-color 0.4s ease-in-out';
    }

    //Funkcja testowa
    test(nr) {
        let counter = 0;
        for (let el of this.progressArray) {
            if (el == nr) {
                counter++;

            }
        }
        alert(counter);
    }
}


export { FlashCard };


