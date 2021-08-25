import Base from '../Base'

class RenderingCards extends Base {
    get cardOne () {
        return $('//*[@id="1890702965"]')
    }

    get cardTwo () {
        return $('//*[@id="1124377537"]')
    }

    get cardThree () {
        return $('//*[@id="1899840987"]')
    }

    get cardFour () {
        return $('//*[@id="1506307445"]')
    }

    get cardFive () {
        return $('//*[@id="1815573101"]')
    }

    get cardSix () {
        return $('//*[@id="1516365455"]')
    }

    cardIsVisible() {
         this.cardOne.waitForExist()
         this.cardTwo.waitForExist()
         this.cardThree.waitForExist()
         this.cardFour.waitForExist()
         this.cardFive.waitForExist()
         this.cardSix.waitForExist()
    }
}

export default new RenderingCards()
