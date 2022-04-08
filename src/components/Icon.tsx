//引入文件中全部svg
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext)
try {
  requireAll(require.context('icons', true, /\.svg$/))
} catch (err) {
  console.log(err)
}

type Props = {
  name: string
  className?: string
}

const Icon = (props: Props) => {
  return (
    <svg className={['icon', props.className].join(' ')}>
      <use xlinkHref={'#' + props.name}></use>
    </svg>
  )
}

export default Icon
