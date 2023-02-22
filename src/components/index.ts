import kButton from "./button/button.vue";
import kDialog from "./dialog/dialog.vue";
import kInput from "./input/input.vue";
import kTable from "./table/table.vue";
import kCarousel from "./carousel/carousel.vue";
import kCarouselcard from "./carousel/carouselcard.vue";
import kTextarea from "./textarea/textarea.vue";

// 按需引入
export { kButton,kDialog,kInput,kTable,kCarousel,kTextarea,kCarouselcard};

const component = [kButton,kDialog,kInput,kTable,kCarousel,kTextarea,kCarouselcard];

const KxUI = {
	install(App:any) {
		component.forEach((item) => {
			App.component(item.name, item);
		});
	},
};

export default KxUI;
