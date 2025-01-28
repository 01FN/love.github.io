                const alternatives = [
                    {text:"", images:"./assets/images/1.gif"},
                    {text:"🥺🥺🥺🙏🏿🙏🏿...", images:"./assets/images/22.gif"},
                    {text:"🙏🏿🙏🏿🙏🏿...", images:"./assets/images/33.gif"},
                    {text:"Come on now, say yes!", images:"./assets/images/3.gif"},
                    {text:"Yes jak!!!!!! 🤬😡😈", images:"./assets/images/44.gif"},
                ];

                const ohyes = {text:"Yeayy, mantap!", images:"./assets/images/yes.gif"};
                const title = document.querySelector('.title');
                const text = document.querySelector('.text');
                const cat = document.querySelector('.cat');
                const buttons = document.querySelectorAll('.button');
                const errorButton = document.querySelector('.button__error');

                let count = 0;
                function updateDisplay(item) {
                    console.log(item);
                    cat.src = item.images;
                    text.innerHTML = item.text;
                }

                errorButton.addEventListener('click', () => {
                    count = 0;
                    updateDisplay(alternatives[count]);
                    buttons.forEach(btn => btn.style.display = 'inline-block');
                    errorButton.style.display = 'none';
                });

                buttons.forEach(button => {
                    button.addEventListener('click', () => {
                        if(button.textContent === 'YES'){
                            updateDisplay(ohyes);
                            buttons.forEach(btn => btn.style.display = 'none');
                            errorButton.style.display = 'inline-block';
                        }
                        if (button.textContent === 'NO'){
                            count++;
                            if(count < alternatives.length){
                                updateDisplay(alternatives[count]);
                            } else {
                                buttons.forEach(btn => btn.style.display = 'none');
                                errorButton.style.display = 'inline-block';
                            }
                        }
                    });
                });