import FooterLevel from "../utils/FooterLevel";

class Footer {
    getFooter() {
        return cy.get('footer.page_footer')
    }

    /**
     * Select footer level.
     * Available options: UPPER, MIDDLE, LOWER
     * @example
     *    getFooterLevel(UPPER)
     *    getFooterLevel(MIDDLE)
     *    getFooterLevel(LOWER)
     */
    getFooterLevel(level: FooterLevel) {
        return cy.get(`.footer_${level}_links > li > a`)
    }

    getCopyrights() {
        return this.getFooter().children('a')
    }
}
export default Footer