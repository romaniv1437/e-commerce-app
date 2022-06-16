import footerLogo from '../assets/photos/Footer/logo.svg'

export interface columns {
    title: string, subTitle: Array<string>
}

export const FooterData = {
    logo: footerLogo, description: 'Your natural candle made for your home and for your wellness.', columns: [
        {title: 'Discovery', subTitle: ['New season', 'Most searched', 'Most selled'] },
        {title: 'About', subTitle: ['Help', 'Shipping', 'Affiliate'] },
        {title: 'Info', subTitle: ['Contact us', 'Privacy Policies', 'Terms & Conditions'] },
    ]

}