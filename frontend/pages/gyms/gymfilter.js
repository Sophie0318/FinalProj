import ResponsiveCheckboxFilter from '@/components/gyms/ResposiveCheckboxFilter'

export default function GymFilters() {
  const filterOptions = [
    '重量訓練',
    '瑜珈伸展',
    '紅繩核心',
    '游泳池',
    '皮拉提斯器械',
    '平衡訓練',
    '功能訓練',
  ]

  return (
    <>
      <ResponsiveCheckboxFilter options={filterOptions} />
    </>
  )
}
