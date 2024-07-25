import React from 'react'

export default function useToggleDisplay(
  group = 1,
  setGroup = () => {},
  visibleData = [],
  setVisibleData = () => {},
  remain = 0,
  setRemain = () => {},
  totalGroup = 1,
  totalRows = 1,
  perGroup = 3,
  actionOnToggle = () => {}
) {
  const toggleOnClick = () => {
    // TODO: try achieve no fetch everytime show prev fetched result
    if (group === totalGroup) {
      // if all comments are fetched, click to hide partial comments
      let sliceIndex = perGroup
      console.log('remain', remain)
      if (totalRows % perGroup) {
        sliceIndex = -(totalRows % perGroup)
        console.log('w/remainder sliceIndex', sliceIndex)
      } else {
        sliceIndex = -perGroup
        console.log('no/remainder sliceIndex', sliceIndex)
      }

      const nextVisibleData = visibleData.slice(0, sliceIndex)
      setVisibleData(nextVisibleData)
      const nextGroup = group - 1
      setGroup(nextGroup)
      const nextRemain = parseInt(totalRows) - nextGroup * perGroup
      setRemain(nextRemain)
    } else {
      // fetch the next 3(info.perGroup) data, defined in page.js
      actionOnToggle()
    }
  }
  return toggleOnClick
}
