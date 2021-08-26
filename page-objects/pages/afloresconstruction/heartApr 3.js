import Base from '../Base'

class HeartApr extends Base {
    get heartLink () {
        return $('/html/body/div[2]/div/div/div/div/div/div/div/div[2]/div[4]/div/div/div/div[5]/div/div/div/a/img')
    }

    selectHeart() {
        this.heartLink.click()
    }
}

export default new HeartApr()
