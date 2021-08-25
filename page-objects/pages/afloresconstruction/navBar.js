import Base from '../Base'

class NavBar extends Base {
    get navLink () {
        return $('/html/body/div[2]/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/div[2]/nav/ul/li[2]')
    }

    selectLink() {
        this.navLink.click()
    }
}

export default new NavBar()
