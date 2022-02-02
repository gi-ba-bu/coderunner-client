/**
* @jest-environment jsdom
*/

const fs = require('fs');
const html = fs.readFileSync(require.resolve('../index.html'), 'utf8');

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        
        it('has stylesheet', () => {
            let stylesheet = document.querySelector("head link[rel='stylesheet']");
            expect(stylesheet).toBeTruthy();
        });

        it('has favicon', () => {
            let icon = document.querySelector("head link[rel='shortcut icon']");
            expect(icon).toBeTruthy();
        });
        
        it('has "Home - Coderunner" as title', () => {
            let title = document.querySelector("head title");
            expect(title).toBeTruthy();
            expect(title.textContent).toBe('Home - Coderunner');
        });

        it('has a bootstrap script', () => {
            let script = document.querySelector('head script[src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"]');
            expect(script).toBeTruthy();
        }); 

        it('has a bundle script', () => {
            let script = document.querySelector("head script[src='./bundle.js']");
            expect(script).toBeTruthy();
        }); 
        
        it('has a defer property in the (first) script', () => {
            let script = document.querySelector('head script');
            expect(script).toBeTruthy();
            console.log(script.attributes[1].name);
            //expect(script.hasAttributes("defert")).toBeTrue; //it works but to finish off !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            });

    });

    describe('single post modal', () => {

    });

    describe('giphy modal', () => {

    });

    describe('nav bar', () => {

    });

    describe('header', () => {

    });

    describe('main content', () => {
        describe('info box', () => {

        });

        describe('post form', () => {

        });

        describe('posts', () => {

        });

        describe('pagination', () => {

        });
    });

    describe('footer', () => {

    });
});
