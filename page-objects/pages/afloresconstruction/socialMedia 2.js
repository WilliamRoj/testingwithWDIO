import Base from '../Base'

class SocialMedia extends Base {
    get socialMediaLink () {
        return $('//*[@id="1531299188"]/div/div/a[1]/span')
    }

    selectSocialMedia() {
        this.socialMediaLink.click()
    }
}

export default new SocialMedia()