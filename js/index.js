;
(function() {

	var vm = new Vue({
		el: "#wrap",
		data: function() {
			return {
				headerviewMessage: "上海",
				jiandianMessage: "全部景点",
				zhutiMessage: "主题乐园",
				shanghuaMessage: "赏花踏青",
				dongzhiMessage: "动植物园",
				hanyangMessage: "海洋馆",
				cityMessage: "城市观光",
				cityGongyuan: "城市公园",
				gaokongMessage: "高空景观",
				FujinMessage: "我附近",
				p1Message:"上海迪士尼度...",
				p2Message:"上海野生动物园",
				p3Message:"上海海昌海洋...",
				p4Message:"东方明珠...",
				p5Message:"东方明珠...",
				p6Message:"上海欢乐谷...",
				p7Message:"上海海洋水族馆",
				p8Message:"上海科技馆",
				span1Message :"￥399",
				span2Message :"￥120",
				span3Message :"￥199",
				span4Message :"￥175",
				span5Message :"￥199",
				span6Message :"￥99",
				span7Message :"￥155",
				span8Message :"￥145",
				likeMessage:"猜你喜欢",
                remenMessage:"热门周边	",			
				dayMessage:"一日游",
				teseMessage:"特色体验",
				zhoupu:"周浦花海",
				shanghan:"上海",
				qinzi:"亲子同乐",
				ziran:"自然风光",
				mingri:"可订明日",
				chenshan:"上海辰山植物园",
				dongwu:"上海动物园",
				neirong:"上海东方明珠+浦江游览+..."
				
				
				
				
				
			}
		},
		methods: {},
		computed: {},
		mounted() {
			$(document).ready(function() {
				var mySwiper = new Swiper('.swiper-container', {
					direction: 'horizontal',
					pagination: {
						el: '.swiper-pagination', // 如果需要分页器
					},
					speed: 2000, // 如果需要前进后退按钮

					autoplay: {
						delay: 2000,
						disableOnInteraction: false
					},
				})
			}),
			$(document).ready(function() {
				var mySwiper = new Swiper('.swiper-container-two', {
					slidesPerView:3.42,
					direction: 'horizontal',
					pagination: {
						el: '.swiper-pagination', // 如果需要分页器
					}


				})
			})

		}

	})

	/**/

})();