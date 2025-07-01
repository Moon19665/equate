import BillPayHero from '../../components/products/bill-pay/BillPayHero'
import BillPayTestimonial from '../../components/products/bill-pay/BillPayTestimonial'
import ScrollFadeSection from '../../components/products/bill-pay/ScrollFadeSection'
import BillPayControlSection from '../../components/products/bill-pay/BillPayControlSection'
import BillPayTestimonialSection from '../../components/products/bill-pay/BillPayTestimonialSection'
import BillPayBenefits from '../../components/products/bill-pay/BillPayBenefits'

import React from 'react'

const BillPay = () => {
  return (
    <div>
      <BillPayHero/>
      <BillPayTestimonial/>
      <ScrollFadeSection/>
      <BillPayControlSection/>
      <BillPayTestimonialSection/>
      <BillPayBenefits/>
    </div>
  )
}

export default BillPay
