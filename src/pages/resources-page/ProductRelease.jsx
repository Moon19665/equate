import UserRoleCustomizationSection from '../../components/resources/product-release/UserRoleCustomizationSection'
import HRISSyncVideoSection from '../../components/resources/product-release/HRISSyncVideoSection'
import ProductReleaseHero from '../../components/resources/product-release/ProductReleaseHero'
import React from 'react'
import SpringReleaseFeatures from '../../components/resources/product-release/SpringReleaseFeatures'

const ProductRelease = () => {
  return (
    <div>
      <ProductReleaseHero/>
      <HRISSyncVideoSection/>
      <UserRoleCustomizationSection/>
      <SpringReleaseFeatures/>
    </div>
  )
}

export default ProductRelease
