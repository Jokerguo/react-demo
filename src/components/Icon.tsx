//引入文件中全部svg
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext)
try {
  requireAll(require.context('icons', true, /\.svg$/))
} catch (err) {
  console.log(err)
}

type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
  const { name, children, className, ...rest } = props
  return (
    <svg className={['icon', className].join(' ')} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name}></use>}
    </svg>
  )
}

export default Icon
