root.innerHTML += `<footer>
    <div class="footerContainer">
        <div class="subscribeForm">
            <div class="formTitle">Subscribe Form</div>
            <form action="">
                <input type="email" name="email" id="email" placeholder="Email Address" required>
                <br />
                <input type="submit" value="Submit" id="submit">
            </form>
        </div>
        <div class="socialMedia">
            <div class="socialItem">
                <a target = "_blank" href="https://www.facebook.com/imdb/"><i class="fa fa-facebook-f"></i></a>
            </div>
            <div class="socialItem">
                <a target = "_blank" href="https://twitter.com/IMDb?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fa fa-twitter"></i></a>
            </div>
            <div class="socialItem">
                <a target = "_blank" href="https://www.instagram.com/imdb/?hl=en"><i class="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div class="copyright">
        </div>
    </div>

</footer>
`

time = new Date().getFullYear();
document.querySelector(".copyright").innerHTML = "&copy;" + time + " by MT";