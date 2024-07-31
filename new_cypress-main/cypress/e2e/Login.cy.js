describe('Проверка авторизации', function () {

    it('позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');// зашел на сайт
        cy.get('#mail').type('german@dolnikov.ru')// вод логина 
        cy.get('#pass').type('iLoveqastudio1')// вод пороля 
        cy.get('#loginButton').click();// нажатие на кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверка
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
     it('негативный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');// зашел на сайт
         cy.get('#mail').type('german@dolnikov.ru')// вод логина 
         cy.get('#pass').type('iLoveqastudio18')// вод не верного пороля 
         cy.get('#loginButton').click();// нажатие на кнопку войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверка
         cy.get('#messageHeader').should('be.visible');// виден текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })
     it('негативный кейс авторизации', function () {
             cy.visit('https://login.qa.studio/');// зашел на сайт
             cy.get('#mail').type('german1@dolnikov.ru')// вод не верного логина 
             cy.get('#pass').type('iLoveqastudio1')// вод верного пороля 
             cy.get('#loginButton').click();// нажатие на кнопку войти
             cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверка
             cy.get('#messageHeader').should('be.visible');// виден текст
             cy.get('#exitMessageButton > .exitIcon').should('be.visible');
             })
     it(' негативный кейс валидации', function () {
                 cy.visit('https://login.qa.studio/');// зашел на сайт
                 cy.get('#mail').type('german')// вод не валидныйлогина 
                 cy.get('#pass').type('iLoveqas')// вод не валидный пороля
                 cy.get('#loginButton').click();// нажатие на кнопку войти
                 cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// проверка
                 cy.get('#messageHeader').should('be.visible');
                 cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                 })
     it('восстановления пароля', function () {
                     cy.visit('https://login.qa.studio/');// зашел на сайт
                     cy.get('#forgotEmailButton').click(); // нажатие на кнопку 
                     cy.get('#mailForgot').type('germa@mail.ru') //Восстановить пороля 
                     cy.get('#restoreEmailButton').click()//нажатие на  отправить код 
                     cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// проверка
                     cy.get('#messageHeader').should('be.visible');
                     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); })
                     it('строчным буквам в логине:', function () {
                        cy.visit('https://login.qa.studio/');// зашел на сайт
                        cy.get('#mail').type('GerMan@Dolnikov.ru')// вод логина 
                        cy.get('#pass').type('iLoveqastudio1')// вод пороля 
                        cy.get('#loginButton').click();// нажатие на кнопку войти
                        cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверка
                        cy.get('#messageHeader').should('be.visible');
                        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                        })

                    })