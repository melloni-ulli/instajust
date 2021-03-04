let article_c = `<div class="col-lg-12 d-flex flex-column justify-content-center align-items-center">
					<div class="post_comment--people d-flex flex-column">
						<div class="post_people--user d-flex align-items-center">
						 	<div class="post_user--img">
						 		<img src="img/com_img.png">
						 	</div>
						 	<div class="post_user--nick">
						 		<a href="acc.html">@beauty4myashes2</a>
						 	</div>
						</div>
						<div class="post_people--text">
							<span>Still playing like it's arena full of people that's love</span>
						</div>
					</div>
					<div class="post_comment--people d-flex flex-column">
						<div class="post_people--user d-flex align-items-center">
						 	<div class="post_user--img">
						 		<img src="img/com_img.png">
						 	</div>
						 	<div class="post_user--nick">
						 		<a href="acc.html">@beauty4myashes2</a>
						 	</div>
						</div>
						<div class="post_people--text">
							<span>Still playing like it's arena full of people that's love</span>
						</div>
					</div>
					<div class="post_comment--people d-flex flex-column">
						<div class="post_people--user d-flex align-items-center">
						 	<div class="post_user--img">
						 		<img src="img/com_img.png">
						 	</div>
						 	<div class="post_user--nick">
						 		<a href="acc.html">@beauty4myashes2</a>
						 	</div>
						</div>
						<div class="post_people--text">
							<span>Still playing like it's arena full of people that's love</span>
						</div>
					</div>
					<div class="post_comment--people d-flex flex-column">
						<div class="post_people--user d-flex align-items-center">
						 	<div class="post_user--img">
						 		<img src="img/com_img.png">
						 	</div>
						 	<div class="post_user--nick">
						 		<a href="acc.html">@beauty4myashes2</a>
						 	</div>
						</div>
						<div class="post_people--text">
							<span>Still playing like it's arena full of people that's love</span>
						</div>
					</div>
					<div class="post_comment--people d-flex flex-column">
						<div class="post_people--user d-flex align-items-center">
						 	<div class="post_user--img">
						 		<img src="img/com_img.png">
						 	</div>
						 	<div class="post_user--nick">
						 		<a href="acc.html">@beauty4myashes2</a>
						 	</div>
						</div>
						<div class="post_people--text">
							<span>Still playing like it's arena full of people that's love</span>
						</div>
					</div>
					<div class="post_comment--people d-flex flex-column">
						<div class="post_people--user d-flex align-items-center">
						 	<div class="post_user--img">
						 		<img src="img/com_img.png">
						 	</div>
						 	<div class="post_user--nick">
						 		<a href="acc.html">@beauty4myashes2</a>
						 	</div>
						</div>
						<div class="post_people--text">
							<span>Still playing like it's arena full of people that's love</span>
						</div>
					</div></div>`;

function populate() {
    while (true) {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
        document.querySelector('.post_comment').insertAdjacentHTML("beforeend", article_c);
    }
}

window.addEventListener('scroll', populate);

populate(); 