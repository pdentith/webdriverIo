const TestPage = require('../pageobjects/test.page');
const testTodos = ['1st Todo', '     ', '!!@##$%%$%^', '1st Todo', 'A string that is on the longer side of things /n with a new line']

describe('The Flock App Tests', () => {
    describe('Calculator Tests', () => {
        it('Addition', async () => {
            await TestPage.open();
            await TestPage.typeCalclator('10+15 \uE007');
            const finalValue = await TestPage.inputCalculator;
            await expect(finalValue).toHaveValue('25');
        });

        it('Subtaction', async () => {
            await TestPage.open();
            await TestPage.typeCalclator('10-15 \uE007');
            const finalValue = await TestPage.inputCalculator;
            await expect(finalValue).toHaveValue('-5');
        });

        it('Division', async () => {
            await TestPage.open();
            await TestPage.typeCalclator('100/5 \uE007');
            const finalValue = await TestPage.inputCalculator;
            await expect(finalValue).toHaveValue('20');
        });

        it('Multiplication', async () => {
            await TestPage.open();
            await TestPage.typeCalclator('0.5*10 \uE007');
            const finalValue = await TestPage.inputCalculator;
            await expect(finalValue).toHaveValue('5');
        });

        it('Alpha Characters', async () => {
            await TestPage.open();
            await TestPage.typeCalclator('Five Plus Five \uE007');
            const finalValue = await TestPage.inputCalculator;
            await expect(finalValue).toHaveValue('0');
        });
    })
    describe('Todo Tests', () => {
        it('Add 1 Todo And Delete', async () => {
            await TestPage.open();
            await TestPage.typeTodo('My first todo \uE007');
            const list = await TestPage.fullListTodo;
            await expect(list).toHaveText('My first todo');
            await expect(list).toHaveChildren(1);
            await TestPage.listTodo.$('input').click();
            await expect(list).toHaveChildren(0);
        });

        it('Add Test String Todos then Delete Middle Todo', async () => {
            await TestPage.open();
            await (TestPage.inputTodo).waitForExist({timeout: 5000})
            for(let i = 0; i < testTodos.length; i++) {
                await TestPage.typeTodo(testTodos[i] + '\uE007');
                const list = await TestPage.fullListTodo;
                await expect(list).toHaveChildren(i + 1);
                const listEntry = await list.$$('li')[i];
                await expect(listEntry).toHaveText(i !== 1 ? testTodos[i] : "", {trim: true});
            }
            const list = await TestPage.fullListTodo;
            await expect(list).toHaveChildren(5);
            await list.$$('li')[2].$('input').click();
            await expect(list).toHaveChildren(4);
        });

    })
    describe('Counter Tests', () => {
        it('Increment', async () => {
            await TestPage.open();
            await TestPage.clickInc();
            const counter = await TestPage.displayCounter;
            await expect(counter).toHaveText('1', {trim: true});
        });

        it('Decrease', async () => {
            await TestPage.open();
            await TestPage.clickDec();
            const counter = await TestPage.displayCounter;
            await expect(counter).toHaveText('-1', {trim: true});
        });

        it('30 Dec Followed by 35 Inc', async () => {
            await TestPage.open();
            for(let i = 1; i < 31; i++){
                await TestPage.clickDec();
                const counter = await TestPage.displayCounter;
                await expect(counter).toHaveText(`-${i.toString()}`, {trim: true});
            }
            for(let i = 1; i < 36; i++){
                await TestPage.clickInc();
                const counter = await TestPage.displayCounter;
                await expect(counter).toHaveText(`${(-30 + i).toString()}`, {trim: true});
            }
        });
    })
});