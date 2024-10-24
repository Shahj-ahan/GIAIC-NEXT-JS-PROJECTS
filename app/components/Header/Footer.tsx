

import StyleCss from './Footer.module.css'
function footer() {
  return (
    <div>
        <footer className={StyleCss.footer}>
            <div>
                <h2>Information </h2>
            <div className={StyleCss.Information}>
            </div>

                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sell</a></li>
                <li><a href="#">Buy</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Price list</a></li>
                <li><a href="#">Registration</a></li>
                <li><a href="#">Help</a></li>
                </div>
                <div className={StyleCss.content}>
                <h2>Information </h2>
            </div>
            <div className={StyleCss.Information}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sell</a></li>
                <li><a href="#">Buy</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Price list</a></li>
                <li><a href="#">Registration</a></li>
                <li><a href="#">Help</a></li>
                </div>
        </footer>
        <div footer-line>

        </div>
    </div>
  )
}

export default footer