import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { styles } from "./styles";
import Button from "../../components/MainButton/MainButton";
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {

const REPORT_OPTIONS = [
	{ name: "Detenido en SEPP", path: "Detained", opts: { screen: "Instruction", initial: false }},
	{ name: "Status de Detenidos", path: "StatusSEPP"},
];
	return (
		<View>
		<StatusBar style="light" />
			<View style={styles.mainContainer}>
				<View style={styles.heroImage}>
					<Svg width="144" height="80" viewBox="0 0 144 80" fill="none">
					<Path d="M74.5982 21.9514C76.6545 29.1519 76.2969 36.2635 74.5088 41.8639C72.6313 47.5532 68.8762 51.5535 64.2271 52.8869C63.5119 53.1536 63.0649 53.1536 62.439 53.1536C62.1708 53.2425 61.9026 53.2425 61.6344 53.2425C61.3662 53.3314 61.0085 53.3314 60.6509 53.3314H30.253L40.177 77.7776C40.2664 78.3999 39.9088 78.9333 39.5512 79.2888C39.1936 79.7333 38.4783 80 38.0313 80H24.5311C24.084 80 23.3688 79.7333 23.0112 79.2888C22.6535 78.9333 22.2959 78.3999 22.3853 77.7776L17.915 53.3314H12.4613L12.3719 53.2425C10.1368 53.5092 7.544 52.4425 5.48767 50.4868C3.43134 48.5311 1.55382 45.6864 0.74917 42.1306C-0.323697 38.5748 -0.144886 35.1968 0.659764 32.3521C1.46441 29.5964 3.25253 27.5518 5.39826 26.5739L5.48767 26.4851L45.7202 2.48334C46.1672 2.21665 46.5248 2.03886 46.7931 1.77217C47.0613 1.59438 47.4189 1.41659 47.8659 1.2388C48.5812 0.883222 49.1176 0.705431 50.1011 0.438745C54.7501 -0.894683 60.1145 0.883221 64.4954 4.79461C68.8762 8.706 72.7207 14.7509 74.5982 21.9514ZM63.0649 48.5311H62.9755C64.7636 48.0866 66.2835 47.0199 67.6246 45.4197C70.2173 42.3084 71.469 37.597 71.469 31.9077C71.469 29.063 71.022 26.1295 70.2173 23.107C68.6974 17.0622 65.6576 11.9951 62.2602 8.706C58.8628 5.41688 54.7501 3.81676 51.2633 4.79461C47.5977 5.77246 45.0049 9.06158 43.6639 13.6841C42.2334 18.3067 42.4122 24.1738 43.9321 30.2187C45.6308 36.2635 48.4024 41.3306 51.9786 44.6197C55.4654 47.9088 59.2204 49.5089 63.0649 48.5311ZM51.7104 17.0622C52.6938 16.8844 53.5879 16.9733 54.4819 17.2399C56.1806 17.9511 57.8793 19.3734 59.0416 21.6847C60.2039 23.996 60.9191 27.0184 60.9191 29.5964C60.9191 30.9298 60.7403 32.0855 60.3827 33.1522C59.5781 35.2857 58.4158 36.8858 56.5383 37.3303C55.0184 37.7747 52.962 37.0636 51.4421 35.5524C49.9222 34.0412 48.5812 31.7299 47.9553 28.8852C47.1507 26.1295 47.4189 23.3737 48.0447 21.2402C48.6706 19.1068 50.1905 17.5066 51.7104 17.0622Z" fill="#101224"/>
					<Path d="M54.0195 75L56.5293 60.7812H62.5645C64.3092 60.7812 65.6178 61.1914 66.4902 62.0117C67.3626 62.832 67.6589 64.0267 67.3789 65.5957C67.099 67.1842 66.3633 68.4082 65.1719 69.2676C63.987 70.1204 62.5384 70.5469 60.8262 70.5469H59.1465L58.3652 75H54.0195ZM59.6738 67.5684H60.9629C61.5749 67.5684 62.0404 67.4154 62.3594 67.1094C62.6784 66.8034 62.8965 66.3314 63.0137 65.6934C63.1243 65.0618 63.0723 64.5996 62.8574 64.3066C62.6426 64.0072 62.2292 63.8574 61.6172 63.8574H60.3184L59.6738 67.5684ZM61.4805 75L59.6055 68.5547L64.1562 68.3203L66.3242 75H61.4805ZM67.5352 70.0684L67.584 69.7559C67.8704 68.1478 68.6322 66.8783 69.8691 65.9473C71.1061 65.0163 72.5417 64.5508 74.1758 64.5508C75.8099 64.5508 77.0306 64.9935 77.8379 65.8789C78.6452 66.7643 78.9089 68.0046 78.6289 69.5996L78.4043 70.8398H70.25L70.5918 68.8574H74.6445L74.6738 68.6621C74.7454 68.291 74.6868 67.985 74.498 67.7441C74.3092 67.4967 74.0065 67.373 73.5898 67.373C73.1406 67.373 72.7598 67.5326 72.4473 67.8516C72.1348 68.1706 71.9134 68.7077 71.7832 69.4629L71.627 70.332C71.5033 71.0547 71.5553 71.5755 71.7832 71.8945C72.0111 72.2135 72.3691 72.373 72.8574 72.373C73.2806 72.373 73.6647 72.2559 74.0098 72.0215C74.3613 71.7806 74.6576 71.5104 74.8984 71.2109L77.7988 72.8223C77.3301 73.6361 76.6204 74.2513 75.6699 74.668C74.7259 75.0846 73.6517 75.293 72.4473 75.293C70.6764 75.293 69.3418 74.8275 68.4434 73.8965C67.5514 72.959 67.2487 71.6829 67.5352 70.0684ZM78.3262 79.0625L80.8359 64.8535H84.8594L84.7227 65.8301H84.7715C85.0124 65.472 85.4062 65.1823 85.9531 64.9609C86.5065 64.7396 87.0729 64.6289 87.6523 64.6289C88.9805 64.6289 89.9798 65.0749 90.6504 65.9668C91.3275 66.8522 91.5228 68.1152 91.2363 69.7559L91.1875 70.0684C90.901 71.6829 90.2695 72.9427 89.293 73.8477C88.3229 74.7461 87.2031 75.1953 85.9336 75.1953C85.3607 75.1953 84.8333 75.1107 84.3516 74.9414C83.8698 74.7656 83.5475 74.5085 83.3848 74.1699L82.5352 79.0625H78.3262ZM83.9219 71.1816C83.9544 71.4746 84.0911 71.7188 84.332 71.9141C84.5729 72.1094 84.8626 72.207 85.2012 72.207C85.6243 72.207 85.9727 72.0768 86.2461 71.8164C86.5195 71.5495 86.7181 71.071 86.8418 70.3809L86.998 69.4629C87.1217 68.7663 87.0924 68.2878 86.9102 68.0273C86.7279 67.7669 86.4186 67.6367 85.9824 67.6367C85.6048 67.6367 85.2826 67.7279 85.0156 67.9102C84.7487 68.0924 84.5371 68.3171 84.3809 68.584L83.9219 71.1816ZM92.2812 70.0684L92.3301 69.7559C92.623 68.1087 93.3945 66.8294 94.6445 65.918C95.901 65 97.3789 64.541 99.0781 64.541C100.784 64.541 102.099 65 103.023 65.918C103.954 66.8294 104.277 68.1087 103.99 69.7559L103.932 70.0684C103.645 71.722 102.874 73.0078 101.617 73.9258C100.367 74.8372 98.8893 75.293 97.1836 75.293C95.4844 75.293 94.1693 74.8372 93.2383 73.9258C92.3073 73.0078 91.9883 71.722 92.2812 70.0684ZM96.6855 69.4434L96.5195 70.3711C96.3893 71.1458 96.4414 71.6569 96.6758 71.9043C96.9102 72.1452 97.2552 72.2656 97.7109 72.2656C98.1732 72.2656 98.5638 72.1452 98.8828 71.9043C99.2083 71.6569 99.4395 71.1458 99.5762 70.3711L99.7324 69.4434C99.8691 68.6816 99.8105 68.1803 99.5566 67.9395C99.3092 67.6986 98.9707 67.5781 98.541 67.5781C98.1048 67.5781 97.7174 67.6986 97.3789 67.9395C97.0469 68.1803 96.8158 68.6816 96.6855 69.4434ZM104.625 75L106.422 64.8535H110.533L110.406 65.8301H110.445C110.673 65.485 110.969 65.1953 111.334 64.9609C111.699 64.7201 112.053 64.5996 112.398 64.5996C112.542 64.5996 112.675 64.6159 112.799 64.6484C112.923 64.681 113.01 64.7103 113.062 64.7363L112.457 68.1543C112.366 68.1152 112.258 68.0859 112.135 68.0664C112.011 68.0469 111.871 68.0371 111.715 68.0371C111.402 68.0371 111.067 68.151 110.709 68.3789C110.351 68.6003 110.074 68.89 109.879 69.248L108.863 75H104.625ZM113.268 67.832L113.795 64.8535H120.836L120.299 67.832H113.268ZM113.854 71.4648L114.801 66.084L114.879 65.8398L115.465 62.5195H119.615L118.092 71.1328C118.007 71.6211 118.03 71.9466 118.16 72.1094C118.29 72.2656 118.476 72.3438 118.717 72.3438C118.84 72.3438 118.971 72.3275 119.107 72.2949C119.244 72.2624 119.371 72.2233 119.488 72.1777L118.99 74.9609C118.827 75.0391 118.58 75.1107 118.248 75.1758C117.923 75.2409 117.555 75.2734 117.145 75.2734C115.947 75.2734 115.042 74.9642 114.43 74.3457C113.818 73.7272 113.626 72.7669 113.854 71.4648ZM120.777 70.0684L120.826 69.7559C121.113 68.1478 121.874 66.8783 123.111 65.9473C124.348 65.0163 125.784 64.5508 127.418 64.5508C129.052 64.5508 130.273 64.9935 131.08 65.8789C131.887 66.7643 132.151 68.0046 131.871 69.5996L131.646 70.8398H123.492L123.834 68.8574H127.887L127.916 68.6621C127.988 68.291 127.929 67.985 127.74 67.7441C127.551 67.4967 127.249 67.373 126.832 67.373C126.383 67.373 126.002 67.5326 125.689 67.8516C125.377 68.1706 125.156 68.7077 125.025 69.4629L124.869 70.332C124.745 71.0547 124.798 71.5755 125.025 71.8945C125.253 72.2135 125.611 72.373 126.1 72.373C126.523 72.373 126.907 72.2559 127.252 72.0215C127.604 71.7806 127.9 71.5104 128.141 71.2109L131.041 72.8223C130.572 73.6361 129.863 74.2513 128.912 74.668C127.968 75.0846 126.894 75.293 125.689 75.293C123.919 75.293 122.584 74.8275 121.686 73.8965C120.794 72.959 120.491 71.6829 120.777 70.0684ZM132.311 71.5918L136.334 71.6211L136.285 71.8652C136.227 72.2168 136.288 72.4577 136.471 72.5879C136.66 72.7181 136.943 72.7832 137.32 72.7832C137.711 72.7832 137.994 72.7181 138.17 72.5879C138.352 72.4577 138.463 72.2819 138.502 72.0605C138.548 71.8262 138.453 71.6634 138.219 71.5723C137.984 71.4811 137.301 71.3314 136.168 71.123C134.885 70.8952 134.052 70.5078 133.668 69.9609C133.284 69.4076 133.163 68.7305 133.307 67.9297C133.495 66.8294 134.088 65.9896 135.084 65.4102C136.087 64.8307 137.359 64.541 138.902 64.541C140.426 64.541 141.585 64.8535 142.379 65.4785C143.18 66.097 143.479 66.9466 143.277 68.0273L143.248 68.2129H139.225L139.264 67.9785C139.316 67.7051 139.273 67.4935 139.137 67.3438C139 67.1875 138.759 67.1094 138.414 67.1094C138.076 67.1094 137.825 67.1582 137.662 67.2559C137.499 67.347 137.402 67.487 137.369 67.6758C137.33 67.8776 137.411 68.0371 137.613 68.1543C137.822 68.2715 138.505 68.431 139.664 68.6328C140.921 68.8477 141.78 69.209 142.242 69.7168C142.704 70.2181 142.861 70.8984 142.711 71.7578C142.509 72.9232 141.907 73.8053 140.904 74.4043C139.902 74.9967 138.57 75.293 136.91 75.293C135.283 75.293 134.052 75 133.219 74.4141C132.392 73.8216 132.079 72.9362 132.281 71.7578L132.311 71.5918Z" fill="#101224"/>
					</Svg>
				</View>
				<View style={styles.optionsContainer}>
				{
					REPORT_OPTIONS.map((report, index)=> {
						return (
							<View key={index} style={{ marginTop: index != 0 ? 20 : 0 }}>
							 	<Button text={report.name} onButtonPressed={() => navigation.navigate(report.path, report.opts ? report.opts : undefined )} disable={false} />
							</View>
						)})
				}
				</View>
			</View>
		</View>
	);
}
