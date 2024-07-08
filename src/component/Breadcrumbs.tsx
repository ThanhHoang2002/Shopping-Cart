import { Breadcrumb } from 'antd'
import { useLocation, Link } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  const breadcrumbItems = [
    {
      title: (
        <Link className='dark:text-white underline' to='/'>
          Home
        </Link>
      )
    },
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return {
        title: (
          <Link className='dark:text-white capitalize underline' to={url}>
            {pathSnippets[index].replace('%20', ' ')}
          </Link>
        )
      }
    })
  ]

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  )
}

export default Breadcrumbs
