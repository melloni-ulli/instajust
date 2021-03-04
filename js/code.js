let article_c = `
<div class="article__item">
<div class="article__card col-lg-12">
	<div class="article__image">
		<a href="post.html"><img src="img/post1.png" alt="Article image"></a>
	</div>
	<div class="article__block">
		<div class="article__name">
			<span>@kingjames</span>
		</div>
		<div class="article__text">
			<div class="text-wrapper">
				Light Dat at Baskin-Robbins <br> <a href="#">#LeBron17 #LeBron18
					#Soldier14</a>
			</div>
		</div>
		<div class="article__info d-flex justify-content-between">
			<div class="article__counters d-flex">
				<div class="article-like">
					<span>1m</span>
				</div>
				<div class="article-comment">
					<span>5401</span>
				</div>
			</div>
			<div class="article__time">
				<span>1 day ago</span>
			</div>
		</div>
	</div>
</div>
</div>
<div class="article__item">
<div class="article__card col-lg-12">
	<div class="article__image">
		<a href="post.html"><img src="img/post1.png" alt="Article image"></a>
	</div>
	<div class="article__block">
		<div class="article__name">
			<span>@kingjames</span>
		</div>
		<div class="article__text">
			<div class="text-wrapper">
				Light Dat at Baskin-Robbins <br> <a href="#">#LeBron17 #LeBron18
					#Soldier14</a>
			</div>
		</div>
		<div class="article__info d-flex justify-content-between">
			<div class="article__counters d-flex">
				<div class="article-like">
					<span>1m</span>
				</div>
				<div class="article-comment">
					<span>5401</span>
				</div>
			</div>
			<div class="article__time">
				<span>1 day ago</span>
			</div>
		</div>
	</div>
</div>
</div>
<div class="article__item">
<div class="article__card col-lg-12">
	<div class="article__image">
		<a href="post.html"><img src="img/post1.png" alt="Article image"></a>
	</div>
	<div class="article__block">
		<div class="article__name">
			<span>@kingjames</span>
		</div>
		<div class="article__text">
			<div class="text-wrapper">
				Light Dat at Baskin-Robbins <br> <a href="#">#LeBron17 #LeBron18
					#Soldier14</a>
			</div>
		</div>
		<div class="article__info d-flex justify-content-between">
			<div class="article__counters d-flex">
				<div class="article-like">
					<span>1m</span>
				</div>
				<div class="article-comment">
					<span>5401</span>
				</div>
			</div>
			<div class="article__time">
				<span>1 day ago</span>
			</div>
		</div>
	</div>
</div>
</div>
<div class="article__item">
<div class="article__card col-lg-12">
	<div class="article__image">
		<a href="post.html"><img src="img/post1.png" alt="Article image"></a>
	</div>
	<div class="article__block">
		<div class="article__name">
			<span>@kingjames</span>
		</div>
		<div class="article__text">
			<div class="text-wrapper">
				Light Dat at Baskin-Robbins <br> <a href="#">#LeBron17 #LeBron18
					#Soldier14</a>
			</div>
		</div>
		<div class="article__info d-flex justify-content-between">
			<div class="article__counters d-flex">
				<div class="article-like">
					<span>1m</span>
				</div>
				<div class="article-comment">
					<span>5401</span>
				</div>
			</div>
			<div class="article__time">
				<span>1 day ago</span>
			</div>
		</div>
	</div>
</div>
</div>
<div class="article__item">
<div class="article__card col-lg-12">
	<div class="article__image">
		<a href="post.html"><img src="img/post1.png" alt="Article image"></a>
	</div>
	<div class="article__block">
		<div class="article__name">
			<span>@kingjames</span>
		</div>
		<div class="article__text">
			<div class="text-wrapper">
				Light Dat at Baskin-Robbins <br> <a href="#">#LeBron17 #LeBron18
					#Soldier14</a>
			</div>
		</div>
		<div class="article__info d-flex justify-content-between">
			<div class="article__counters d-flex">
				<div class="article-like">
					<span>1m</span>
				</div>
				<div class="article-comment">
					<span>5401</span>
				</div>
			</div>
			<div class="article__time">
				<span>1 day ago</span>
			</div>
		</div>
	</div>
</div>
</div>
<div class="article__item">
<div class="article__card col-lg-12">
	<div class="article__image">
		<a href="post.html"><img src="img/post1.png" alt="Article image"></a>
	</div>
	<div class="article__block">
		<div class="article__name">
			<span>@kingjames</span>
		</div>
		<div class="article__text">
			<div class="text-wrapper">
				Light Dat at Baskin-Robbins <br> <a href="#">#LeBron17 #LeBron18
					#Soldier14</a>
			</div>
		</div>
		<div class="article__info d-flex justify-content-between">
			<div class="article__counters d-flex">
				<div class="article-like">
					<span>1m</span>
				</div>
				<div class="article-comment">
					<span>5401</span>
				</div>
			</div>
			<div class="article__time">
				<span>1 day ago</span>
			</div>
		</div>
	</div>
</div>
</div>
<div class="advert__middle">
<!-- Вместо кода изображения вставить код Adsense-->
								<img style="width:100%; max-width: 800px; height:80px"
									src='https://placehold.it/800x80?text=Advert%20middle' alt='' />
									<!-- Конец кода изображения -->
							</div>

`;

function populate() {
	while (true) {
		let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
		if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
		document.querySelector('.article').insertAdjacentHTML("beforeend", article_c);
	}
}

window.addEventListener('scroll', populate);

populate();

