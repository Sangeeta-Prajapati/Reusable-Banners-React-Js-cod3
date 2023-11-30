// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className, id} = bannerDetails
  return (
    <li className={className} key={id}>
      <div className="bg-container">
        <h1 className="heading">{headerText}</h1>
        <p className="des">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
