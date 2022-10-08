import "../Layout/layout.css"
import config from "../config.json"
export default function Footer() {
    return (
        <div className="footer">
            <div>
                <span>© Copyright Porfolio</span>
            </div>
            <div>
                <span>Developer by <b>{config.footerName}</b></span>
            </div>
        </div>
    )
}