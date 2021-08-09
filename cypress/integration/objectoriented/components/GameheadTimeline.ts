class GameheadTimeline {
    checkRedDot() {
        cy.log(`check red dot - half game`)
        cy.get('div.line.correctTime').then(($els) => {
            const win = $els[0].ownerDocument.defaultView as Window
            const after = win.getComputedStyle($els[0], 'after')
            const color = after.getPropertyValue('background-color')
            expect(color).to.eq('rgb(240, 60, 60)')
            cy.url().then(($url) => {
                cy.log($url);
            })
        })
    }
}
export default GameheadTimeline