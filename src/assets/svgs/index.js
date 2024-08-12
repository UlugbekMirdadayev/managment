const CalendarIcon = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2861 5.14272V2.57129"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M7.71387 5.14272L7.71387 2.57129"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M2.57129 8.57129L21.4284 8.57129"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
    />
    <path
      d="M21.4284 5.14307L2.57129 5.14307L2.57129 20.5716L21.4284 20.5716L21.4284 5.14307Z"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const TaskIcon = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5713 18.8571L16.2856 20.5714L20.5713 16.2856"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M10.2856 20.5716H2.57129L2.57129 5.14307L21.4284 5.14307V12.0002"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M7.71387 2.57129L7.71387 5.14272"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M16.2861 2.57129V5.14272"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M2.57129 8.57129L21.4284 8.57129"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
    />
  </svg>
);

const Reports = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.75 10.5H20.25C20.6478 10.5 21.0294 10.342 21.3107 10.0607C21.592 9.77936 21.75 9.39782 21.75 9V4.5C21.75 4.10218 21.592 3.72064 21.3107 3.43934C21.0294 3.15804 20.6478 3 20.25 3L15.75 3C15.3522 3 14.9706 3.15804 14.6893 3.43934C14.408 3.72064 14.25 4.10218 14.25 4.5V6H13.5C12.7044 6 11.9413 6.31607 11.3787 6.87868C10.8161 7.44129 10.5 8.20435 10.5 9V11.25H7.5V10.5C7.5 10.1022 7.34196 9.72064 7.06066 9.43934C6.77936 9.15804 6.39782 9 6 9H3C2.60218 9 2.22064 9.15804 1.93934 9.43934C1.65804 9.72064 1.5 10.1022 1.5 10.5L1.5 13.5C1.5 13.8978 1.65804 14.2794 1.93934 14.5607C2.22064 14.842 2.60218 15 3 15L6 15C6.39782 15 6.77936 14.842 7.06066 14.5607C7.34196 14.2794 7.5 13.8978 7.5 13.5V12.75H10.5L10.5 15C10.5 15.7956 10.8161 16.5587 11.3787 17.1213C11.9413 17.6839 12.7044 18 13.5 18H14.25V19.5C14.25 19.8978 14.408 20.2794 14.6893 20.5607C14.9706 20.842 15.3522 21 15.75 21H20.25C20.6478 21 21.0294 20.842 21.3107 20.5607C21.592 20.2794 21.75 19.8978 21.75 19.5V15C21.75 14.6022 21.592 14.2206 21.3107 13.9393C21.0294 13.658 20.6478 13.5 20.25 13.5L15.75 13.5C15.3522 13.5 14.9706 13.658 14.6893 13.9393C14.408 14.2206 14.25 14.6022 14.25 15V16.5H13.5C13.1022 16.5 12.7206 16.342 12.4393 16.0607C12.158 15.7794 12 15.3978 12 15L12 9C12 8.60218 12.158 8.22064 12.4393 7.93934C12.7206 7.65804 13.1022 7.5 13.5 7.5L14.25 7.5V9C14.25 9.39782 14.408 9.77936 14.6893 10.0607C14.9706 10.342 15.3522 10.5 15.75 10.5ZM6 13.5L3 13.5L3 10.5H6L6 13.5ZM15.75 15L20.25 15V19.5H15.75V15ZM15.75 4.5L20.25 4.5V9H15.75L15.75 4.5Z"
      fill={color}
    />
  </svg>
);

const Ticket = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.16968 15.0153L12.5314 4.65351C12.621 4.6649 12.7154 4.63723 12.7837 4.56887C12.8521 4.50051 12.8814 4.4061 12.8684 4.31658L15.0153 2.16968C15.2415 1.94344 15.611 1.94344 15.8372 2.16968L17.5349 3.86897C17.0889 4.59654 17.1817 5.56012 17.8116 6.19003C18.4415 6.81994 19.4051 6.91109 20.1327 6.46673L21.8303 8.16439C22.0566 8.39064 22.0566 8.76012 21.8303 8.98637L19.6834 11.1333C19.5939 11.1219 19.5011 11.1495 19.4311 11.2179C19.3628 11.2863 19.3335 11.3807 19.3465 11.4702L8.98637 21.8303C8.76012 22.0566 8.39064 22.0566 8.16439 21.8303L6.4765 20.144C6.96155 19.41 6.88016 18.4138 6.23561 17.7677C5.58942 17.1215 4.59329 17.0417 3.85921 17.5268L2.16968 15.8372C1.94344 15.611 1.94344 15.2415 2.16968 15.0153ZM18.6466 10.4334C18.7638 10.3162 18.9542 10.3162 19.0714 10.4334C19.1886 10.5506 19.1886 10.741 19.0714 10.8582C18.9542 10.9754 18.7638 10.9754 18.6466 10.8582C18.5294 10.741 18.5294 10.5506 18.6466 10.4334ZM17.8604 9.6472C17.9776 9.53001 18.1681 9.53001 18.2852 9.6472C18.4024 9.76439 18.4024 9.95483 18.2852 10.072C18.1681 10.1892 17.9776 10.1892 17.8604 10.072C17.7432 9.95483 17.7432 9.76439 17.8604 9.6472ZM17.0743 8.86104C17.1915 8.74385 17.3819 8.74385 17.4991 8.86104C17.6163 8.97823 17.6163 9.16867 17.4991 9.28586C17.3819 9.40305 17.1915 9.40305 17.0743 9.28586C16.9571 9.16867 16.9571 8.97823 17.0743 8.86104ZM16.2881 8.07487C16.4053 7.95768 16.5957 7.95768 16.7129 8.07487C16.8301 8.19206 16.8301 8.3825 16.7129 8.49969C16.5957 8.61689 16.4053 8.61689 16.2881 8.49969C16.1709 8.3825 16.1709 8.19206 16.2881 8.07487ZM15.5019 7.28871C15.6191 7.17152 15.8096 7.17152 15.9268 7.28871C16.0439 7.4059 16.0439 7.59634 15.9268 7.71353C15.8096 7.83072 15.6191 7.83072 15.5019 7.71353C15.3847 7.59634 15.3847 7.4059 15.5019 7.28871ZM14.7158 6.50254C14.833 6.38535 15.0234 6.38535 15.1406 6.50254C15.2578 6.61974 15.2578 6.81017 15.1406 6.92737C15.0234 7.04456 14.833 7.04456 14.7158 6.92737C14.5986 6.81017 14.5986 6.61974 14.7158 6.50254ZM13.9296 5.71638C14.0468 5.59919 14.2372 5.59919 14.3544 5.71638C14.4716 5.83357 14.4716 6.02401 14.3544 6.1412C14.2372 6.25839 14.0468 6.25839 13.9296 6.1412C13.8124 6.02401 13.8124 5.83357 13.9296 5.71638ZM13.1434 4.93021C13.2606 4.81302 13.4511 4.81302 13.5683 4.93021C13.6855 5.04741 13.6855 5.23784 13.5683 5.35504C13.4511 5.47223 13.2606 5.47223 13.1434 5.35504C13.0262 5.23784 13.0262 5.04741 13.1434 4.93021ZM6.14283 14.1933L12.5526 7.78352C12.8163 7.51984 13.2476 7.51984 13.5113 7.78352L16.4574 10.7296C16.7211 10.9933 16.7211 11.4246 16.4574 11.6883L10.0476 18.0981C9.78393 18.3617 9.35259 18.3617 9.08891 18.0981L6.14283 15.152C5.87915 14.8883 5.87915 14.457 6.14283 14.1933Z"
      fill={color}
    />
  </svg>
);

const Icon1 = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 20.2493H3.56087V20.2461C3.12956 20.2461 2.73893 20.0703 2.45736 19.7887C2.17741 19.5088 2.00326 19.1198 2.00326 18.6901H2V3H3.99544V18.2555H22V20.2493ZM15.5693 10.4219H18.7513C18.9206 10.4219 19.0589 10.5602 19.0589 10.7295V16.9893C19.0589 17.1585 18.9206 17.2969 18.7513 17.2969H15.5693C15.4001 17.2969 15.2617 17.1585 15.2617 16.9893V10.7311C15.2617 10.5618 15.4001 10.4219 15.5693 10.4219ZM6.1276 6.59212H9.30957C9.47884 6.59212 9.61719 6.73047 9.61719 6.89974V16.9909C9.61719 17.1602 9.47884 17.2985 9.30957 17.2985H6.1276C5.95833 17.2985 5.81999 17.1602 5.81999 16.9909V6.89974C5.81999 6.73047 5.95833 6.59212 6.1276 6.59212ZM10.8493 4.43717H14.0296C14.1989 4.43717 14.3372 4.57552 14.3372 4.74479V16.9909C14.3372 17.1602 14.1989 17.2985 14.0296 17.2985H10.8493C10.68 17.2985 10.5417 17.1602 10.5417 16.9909V4.74479C10.5417 4.57552 10.68 4.43717 10.8493 4.43717Z"
      fill="#565E6C"
    />
  </svg>
);

const Icon2 = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.2048 19.7035C19.64 20.488 18.8392 21.0902 17.9049 21.4092C17.8626 21.4287 17.8154 21.4385 17.7682 21.4385C17.7227 21.4385 17.6771 21.4287 17.6348 21.4108V21.4206C17.6348 21.7396 17.3743 22 17.0537 22H15.8037C15.4847 22 15.2227 21.7396 15.2227 21.4206V12.4476C15.2227 12.1286 15.4831 11.8665 15.8037 11.8665H17.0537C17.3727 11.8665 17.6348 12.127 17.6348 12.4476V12.5029C17.6771 12.4834 17.7227 12.4736 17.7682 12.4736C17.804 12.4736 17.8398 12.4801 17.8724 12.4899V12.4915C18.582 12.7275 19.2168 13.1296 19.7311 13.6488V11.6273C19.7311 9.20378 18.9189 7.13021 17.4834 5.67025L16.847 6.61914C15.5531 5.19499 13.6895 4.29655 11.6257 4.29655C9.54883 4.29655 7.6722 5.20638 6.37826 6.64844L5.6084 5.70768C4.19238 7.15137 3.38997 9.19564 3.38997 11.6273V13.9466C3.94336 13.2826 4.67904 12.7715 5.51725 12.4932V12.4915C5.55143 12.4801 5.58724 12.4736 5.62142 12.4736C5.66699 12.4736 5.71419 12.4834 5.75488 12.5013V12.446C5.75488 12.127 6.01693 11.8649 6.33594 11.8649H7.58594C7.90495 11.8649 8.16699 12.1253 8.16699 12.446V21.4189C8.16699 21.738 7.90495 21.9984 7.58594 21.9984H6.33594C6.01693 21.9984 5.75488 21.738 5.75488 21.4189V21.4092C5.71419 21.4271 5.66862 21.4368 5.62142 21.4368C5.57259 21.4368 5.52702 21.4255 5.48633 21.4076C4.55208 21.0885 3.7513 20.4863 3.18652 19.7018C2.8903 19.2917 2.65918 18.8327 2.50781 18.3395H2V11.6273C2 8.97917 3.08236 6.57357 4.82715 4.82878C6.57194 3.08398 8.97917 2 11.6257 2C14.2738 2 16.681 3.08398 18.4242 4.82715C20.1689 6.57194 21.2513 8.97754 21.2513 11.6257V18.3395H20.8818C20.7337 18.8278 20.5026 19.29 20.2048 19.7035Z"
      fill="#565E6C"
    />
  </svg>
);

const Icon3 = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.5829 15.3501C20.1498 14.4838 19.1052 14.1017 18.2134 14.5348C18.0096 14.6367 17.8313 14.7641 17.7039 14.917L14.3152 12.9551C14.57 12.3182 14.5445 11.6557 14.3152 11.0442L17.7039 9.08238C18.0096 9.38812 18.3918 9.59195 18.8759 9.64291C18.9268 9.64291 18.9523 9.64291 19.0033 9.64291C19.4364 9.64291 19.8441 9.49004 20.1498 9.20977C20.5065 8.90403 20.7103 8.4709 20.7613 8.01228C20.7868 7.55367 20.6339 7.09505 20.3281 6.73836C20.0224 6.38166 19.5893 6.17783 19.1307 6.12687C18.1625 6.05043 17.3217 6.78931 17.2452 7.7575C17.2198 7.9868 17.2452 8.19063 17.3217 8.39446L13.933 10.3563C13.7802 10.1525 13.5763 9.97413 13.347 9.82126C13.0158 9.59195 12.6336 9.46456 12.2769 9.38812V5.48991C12.7101 5.38799 13.0922 5.13321 13.347 4.75103C13.6018 4.36885 13.7037 3.88476 13.6273 3.42614C13.5509 2.96753 13.2706 2.55987 12.8884 2.30509C12.5062 2.0503 12.0221 1.94839 11.5635 2.02483C11.1049 2.10126 10.6973 2.38152 10.4425 2.7637C9.90742 3.57902 10.1113 4.67459 10.9266 5.20964C11.1049 5.33704 11.3087 5.41347 11.5126 5.46443V9.36264C10.8756 9.46456 10.2896 9.79578 9.85647 10.3308L6.46782 8.36898C6.59521 7.96133 6.56974 7.50271 6.36591 7.09506C6.16208 6.66192 5.80538 6.35618 5.34677 6.20331C4.88815 6.05044 4.42954 6.07591 3.9964 6.27974C3.13013 6.71288 2.74795 7.7575 3.18109 8.64925C3.48683 9.28621 4.1238 9.64291 4.78624 9.64291C5.04102 9.64291 5.29581 9.59195 5.55059 9.46456C5.75442 9.36265 5.93277 9.23525 6.06016 9.08238L9.44881 11.0442C9.19403 11.6812 9.2195 12.3436 9.44881 12.9551L6.06016 14.917C5.75442 14.5857 5.34677 14.4074 4.88815 14.3564C3.91997 14.28 3.07917 15.0189 3.00274 15.9871C2.97726 16.4457 3.13013 16.9043 3.43587 17.261C3.74162 17.6177 4.17475 17.8215 4.63337 17.8725C4.68432 17.8725 4.7098 17.8725 4.76076 17.8725C5.19389 17.8725 5.60155 17.7196 5.90729 17.4393C6.26399 17.1336 6.46782 16.7005 6.51878 16.2419C6.54426 16.0125 6.51878 15.8087 6.44234 15.6049L9.83099 13.643C9.98386 13.8469 10.1877 14.0252 10.417 14.1781C10.7482 14.4074 11.1304 14.5348 11.4871 14.6112V18.5094C11.0794 18.6114 10.6973 18.8661 10.417 19.2483C9.88195 20.0636 10.0858 21.1592 10.9011 21.6943C11.2068 21.8981 11.5381 22 11.8948 22C12.4553 22 13.0158 21.7197 13.3725 21.2356C13.9076 20.4203 13.7037 19.3248 12.8884 18.7897C12.7101 18.6623 12.5062 18.5859 12.3024 18.5349V14.6367C12.9394 14.5348 13.5254 14.2036 13.9585 13.6685L17.3472 15.6304C17.2198 16.0635 17.2452 16.5221 17.4491 16.9043C17.7548 17.5413 18.3918 17.898 19.0542 17.898C19.309 17.898 19.5638 17.847 19.8186 17.7196C20.6594 17.2865 21.0161 16.2419 20.5829 15.3501ZM18.0351 7.83393C18.0606 7.29888 18.5446 6.91671 19.0542 6.94218C19.309 6.96766 19.5383 7.06958 19.7167 7.2734C19.895 7.47723 19.9714 7.70654 19.946 7.96133C19.9205 8.21611 19.8186 8.44542 19.6147 8.62377C19.4109 8.80212 19.1816 8.87855 18.9268 8.85307C18.3918 8.8276 18.0096 8.36898 18.0351 7.83393ZM5.16842 8.75116C4.68432 8.98047 4.1238 8.77664 3.89449 8.31803C3.66518 7.83393 3.86901 7.2734 4.32762 7.0441C4.45502 6.96766 4.60789 6.94218 4.73528 6.94218C4.83719 6.94218 4.93911 6.96766 5.04102 6.99314C5.29581 7.06958 5.47416 7.24793 5.60155 7.47723C5.83086 7.96133 5.62703 8.52185 5.16842 8.75116ZM5.70346 16.1909C5.67799 16.4457 5.57607 16.675 5.37224 16.8533C5.16842 17.0317 4.93911 17.1081 4.68432 17.0826C4.42954 17.0572 4.20023 16.9553 4.02188 16.7514C3.84353 16.5476 3.7671 16.3183 3.79257 16.0635C3.81805 15.5539 4.25119 15.1718 4.76076 15.1718C4.78624 15.1718 4.81172 15.1718 4.83719 15.1718C5.09198 15.1972 5.32129 15.2991 5.49964 15.503C5.62703 15.7068 5.72894 15.9361 5.70346 16.1909ZM11.0794 3.2478C11.2323 3.04397 11.4361 2.8911 11.6909 2.84014C11.7419 2.84014 11.8183 2.81466 11.8693 2.81466C12.0476 2.81466 12.2514 2.86562 12.4043 2.99301C12.8375 3.29875 12.9648 3.88476 12.6591 4.31789C12.5062 4.52172 12.3024 4.67459 12.0476 4.72555C11.7928 4.77651 11.5381 4.72555 11.3342 4.57268C10.9011 4.26694 10.7737 3.68093 11.0794 3.2478ZM12.6591 20.777C12.3534 21.2102 11.7674 21.3376 11.3342 21.0318C10.9011 20.7261 10.7737 20.1401 11.0794 19.7069C11.2578 19.4267 11.5635 19.2738 11.8693 19.2738C12.0476 19.2738 12.2514 19.3248 12.4043 19.4267C12.8375 19.7579 12.9648 20.3439 12.6591 20.777ZM10.8501 13.5411C10.0093 12.9806 9.78003 11.8341 10.366 10.9933C10.9266 10.1525 12.0731 9.92317 12.9139 10.5092C13.7547 11.0697 13.984 12.2162 13.398 13.057C12.812 13.8723 11.6654 14.1017 10.8501 13.5411ZM19.9205 16.4457C19.8441 16.7005 19.6657 16.8788 19.4364 17.0062C18.9523 17.2355 18.3918 17.0317 18.1625 16.5731C18.0606 16.3438 18.0351 16.089 18.1115 15.8342C18.188 15.5794 18.3663 15.4011 18.5956 15.2737C18.723 15.1972 18.8759 15.1718 19.0033 15.1718C19.36 15.1718 19.7167 15.3756 19.8695 15.7068C19.9714 15.9361 19.9969 16.1909 19.9205 16.4457Z"
      fill="#565E6C"
    />
  </svg>
);

const Plus = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2578 2.85693L10.2578 17.1426"
      stroke="white"
      strokeWidth="1.71429"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M17.4005 10L3.11475 10"
      stroke="white"
      strokeWidth="1.71429"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const ArrowLeft = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.30455 2.30454L7.5 1.5L3 6L7.5 10.5L8.30455 9.69545L4.60909 6L8.30455 2.30454Z"
      fill="#565E6C"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 9.69545L4.30454 10.5L8.80453 6L4.30454 1.5L3.5 2.30454L7.19543 6L3.5 9.69545Z"
      fill="#565E6C"
    />
  </svg>
);

const ArrowDown = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke={color ? color : "#535CE8"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Clock = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.30634 13.1508C10.3491 13.1508 12.8158 10.6841 12.8158 7.6413C12.8158 4.59851 10.3491 2.13184 7.30634 2.13184C4.26355 2.13184 1.79687 4.59851 1.79687 7.6413C1.79687 10.6841 4.26355 13.1508 7.30634 13.1508Z"
      stroke="#565E6C"
      strokeWidth="1.20207"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M7.30566 4.63623L7.30566 7.64139L10.3108 7.64139"
      stroke="#565E6C"
      strokeWidth="1.20207"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const Pen = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.8487 1.50093C12.0341 1.31549 12.2543 1.16839 12.4966 1.06803C12.7388 0.96767 12.9985 0.916016 13.2608 0.916016C13.523 0.916016 13.7827 0.96767 14.025 1.06803C14.2673 1.16839 14.4875 1.31549 14.6729 1.50093C14.8583 1.68637 15.0054 1.90652 15.1058 2.14882C15.2062 2.39111 15.2578 2.65079 15.2578 2.91305C15.2578 3.1753 15.2062 3.43499 15.1058 3.67728C15.0054 3.91957 14.8583 4.13972 14.6729 4.32516L5.14113 13.8569L1.25781 14.916L2.3169 11.0327L11.8487 1.50093Z"
      stroke="#323842"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Close = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="36" height="36" rx="18" fill="#F3F4F6" />
    <path
      d="M23.5 12.5L12.5 23.5"
      stroke="#565E6C"
      strokeWidth="1.88571"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M23.5 23.5L12.5 12.5"
      stroke="#565E6C"
      strokeWidth="1.88571"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const CInfo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.4284C17.2072 21.4284 21.4286 17.2071 21.4286 11.9999C21.4286 6.7926 17.2072 2.57129 12 2.57129C6.79273 2.57129 2.57141 6.7926 2.57141 11.9999C2.57141 17.2071 6.79273 21.4284 12 21.4284Z"
      stroke="#535CE8"
      strokeWidth="2.05714"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M12 11.1431L12 16.2859"
      stroke="#535CE8"
      strokeWidth="2.05714"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M11.9997 8.57122C12.4731 8.57122 12.8569 8.18746 12.8569 7.71408C12.8569 7.24069 12.4731 6.85693 11.9997 6.85693C11.5263 6.85693 11.1426 7.24069 11.1426 7.71408C11.1426 8.18746 11.5263 8.57122 11.9997 8.57122Z"
      fill="#535CE8"
    />
  </svg>
);

const ArrowRight2 = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.85742 10L17.1431 10"
      stroke="white"
      strokeWidth="1.71429"
      strokeMiterlimit="10"
    />
    <path
      d="M12.1426 5L17.1426 10L12.1426 15"
      stroke="white"
      strokeWidth="1.71429"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const ArrowUp = (props) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.1331 17.6091L21.7422 16L12.7422 7L3.74219 16L5.35128 17.6091L12.7422 10.2182L20.1331 17.6091Z"
      fill="#6E7787"
    />
  </svg>
);

const User = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.9902 19.2812C17.8744 17.2344 16.707 16.5847 14.9996 16.0155C13.695 15.5809 13.3359 14.2112 13.2373 13.4844"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
    />
    <path
      d="M10.7615 13.4844C10.6647 14.2078 10.3124 15.5792 9.0001 16.0164C7.29267 16.5855 6.12353 17.2335 6.00781 19.2804"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
    />
    <path
      d="M11.9999 13.7143C10.1064 13.7143 8.57129 12.1791 8.57129 10.2857L8.57129 9.42857C8.57129 7.53514 10.1064 6 11.9999 6C13.8933 6 15.4284 7.53514 15.4284 9.42857V10.2857C15.4284 12.1791 13.8933 13.7143 11.9999 13.7143Z"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M11.9999 21.4275C17.2071 21.4275 21.4284 17.2061 21.4284 11.9989C21.4284 6.79163 17.2071 2.57031 11.9999 2.57031C6.7926 2.57031 2.57129 6.79163 2.57129 11.9989C2.57129 17.2061 6.7926 21.4275 11.9999 21.4275Z"
      stroke={color}
      strokeWidth="2.05714"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const ArrowUp2 = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 11L8 5L2 11"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDown2 = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 5L8 11L14 5"
      stroke={props.color || "white"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FullViewIcon = ({ expanded, ...props }) =>
  expanded ? (
    <svg
      fill="none"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipRule="evenodd" fill="rgb(0,0,0)" fillRule="evenodd">
        <path d="m4.46967 1.46967c.29289-.29289.76777-.29289 1.06066 0l6.46967 6.46967 6.4697-6.46967c.2929-.29289.7677-.29289 1.0606 0s.2929.76777 0 1.06066l-7 7c-.2929.29289-.7677.29289-1.0606 0l-7.00003-7c-.29289-.29289-.29289-.76777 0-1.06066z" />
        <path d="m11.4697 14.4697c.2929-.2929.7677-.2929 1.0606 0l7 7c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0l-6.4697-6.4696-6.46967 6.4696c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7677 0-1.0606z" />
        <path d="m22.0303 4.46967c.2929.29289.2929.76777 0 1.06066l-6.4696 6.46967 6.4696 6.4697c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0l-7-7c-.2929-.2929-.2929-.7677 0-1.0606l7-7.00003c.2929-.29289.7677-.29289 1.0606 0z" />
        <path d="m1.46967 4.46967c.29289-.29289.76777-.29289 1.06066 0l7 7.00003c.29289.2929.29289.7677 0 1.0606l-7 7c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7677 0-1.0606l6.46967-6.4697-6.46967-6.46967c-.29289-.29289-.29289-.76777 0-1.06066z" />
      </g>
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.786 3.21423L11.3574 8.6428"
        stroke="#565E6C"
        strokeWidth="1.62857"
        strokeMiterlimit="10"
      />
      <path
        d="M11.3574 3.21423L16.786 3.21423L16.786 8.6428"
        stroke="#565E6C"
        strokeWidth="1.62857"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M3.21387 16.7857L8.64244 11.3572"
        stroke="#565E6C"
        strokeWidth="1.62857"
        strokeMiterlimit="10"
      />
      <path
        d="M3.21387 11.3572L3.21387 16.7857L8.64244 16.7857"
        stroke="#565E6C"
        strokeWidth="1.62857"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );

const GeoLocation = (props) => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5716 5.28578C10.5716 8.08578 6.00014 12.7144 6.00014 12.7144C6.00014 12.7144 1.42871 8.08578 1.42871 5.28578C1.42871 2.3715 3.77157 0.714355 6.00014 0.714355C8.22871 0.714355 10.5716 2.3715 10.5716 5.28578Z"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M6.00042 7.0001C6.94719 7.0001 7.7147 6.23259 7.7147 5.28582C7.7147 4.33905 6.94719 3.57153 6.00042 3.57153C5.05364 3.57153 4.28613 4.33905 4.28613 5.28582C4.28613 6.23259 5.05364 7.0001 6.00042 7.0001Z"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const TimeIcon = (props) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.99958 13.2858C10.4711 13.2858 13.2853 10.4716 13.2853 7.00007C13.2853 3.52857 10.4711 0.714355 6.99958 0.714355C3.52808 0.714355 0.713867 3.52857 0.713867 7.00007C0.713867 10.4716 3.52808 13.2858 6.99958 13.2858Z"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M7 3.57153L7 7.0001L10.4286 7.0001"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const LinkIcon = (props) => (
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.71387 1.14282L10.4282 1.14282C12.0282 1.14282 13.2853 2.39997 13.2853 3.99997C13.2853 5.59997 12.0282 6.85711 10.4282 6.85711H8.71387"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M5.2853 6.85711H3.57101C1.97101 6.85711 0.713867 5.59997 0.713867 3.99997C0.713867 2.39997 1.97101 1.14282 3.57101 1.14282L5.2853 1.14282"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M4.71387 4L9.2853 4"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const UserIcon = (props) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.9938 11.8543C10.9166 10.4897 10.1383 10.0566 9.00005 9.67717C8.13034 9.38746 7.89091 8.47432 7.8252 7.98975"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
    />
    <path
      d="M6.17403 7.98926C6.10945 8.47154 5.8746 9.38583 4.99974 9.67726C3.86145 10.0567 3.08203 10.4887 3.00488 11.8533"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
    />
    <path
      d="M6.99958 8.14286C5.7373 8.14286 4.71387 7.11943 4.71387 5.85714V5.28571C4.71387 4.02343 5.7373 3 6.99958 3C8.26187 3 9.2853 4.02343 9.2853 5.28571V5.85714C9.2853 7.11943 8.26187 8.14286 6.99958 8.14286Z"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M6.99958 13.2858C10.4711 13.2858 13.2853 10.4716 13.2853 7.00007C13.2853 3.52857 10.4711 0.714355 6.99958 0.714355C3.52808 0.714355 0.713867 3.52857 0.713867 7.00007C0.713867 10.4716 3.52808 13.2858 6.99958 13.2858Z"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const UsersIcon = (props) => (
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.2857 11.2862L13.5714 11.2862L13.5714 8.81594C13.5714 8.70176 13.5371 8.59021 13.473 8.4957C13.4089 8.40118 13.318 8.32802 13.212 8.28566L11.0737 7.42851C10.9679 7.38622 10.8771 7.31324 10.813 7.21895C10.749 7.12465 10.7146 7.01336 10.7143 6.89937V6.39766C11.0609 6.19877 11.3489 5.91212 11.5496 5.56655C11.7502 5.22098 11.8563 4.82867 11.8571 4.42908V3.28623C11.8572 2.88496 11.7517 2.49073 11.5511 2.14319C11.3505 1.79565 11.062 1.50703 10.7145 1.30636C10.367 1.10568 9.97283 1.00002 9.57156 1C9.17029 0.999977 8.77608 1.10559 8.42857 1.30623"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M8.64057 8.85709L6.50229 7.99994C6.39643 7.95765 6.30564 7.88467 6.24159 7.79038C6.17754 7.69608 6.14316 7.58479 6.14286 7.4708L6.14286 6.96909C6.48943 6.7702 6.77752 6.48355 6.97814 6.13798C7.17876 5.79241 7.28484 5.4001 7.28571 5.00051V3.85766C7.28571 3.25145 7.0449 2.67007 6.61624 2.24141C6.18759 1.81276 5.60621 1.57194 5 1.57194C4.39379 1.57194 3.81241 1.81276 3.38376 2.24141C2.9551 2.67007 2.71429 3.25145 2.71429 3.85766V5.00051C2.71516 5.4001 2.82124 5.79241 3.02186 6.13798C3.22249 6.48355 3.51057 6.7702 3.85714 6.96909V7.4708C3.85707 7.58498 3.82279 7.69653 3.75873 7.79105C3.69466 7.88557 3.60375 7.95872 3.49771 8.00109L1.35943 8.85823C1.25357 8.90052 1.16279 8.9735 1.09874 9.06779C1.03469 9.16209 1.0003 9.27338 1 9.38737L1 11.2862L9 11.2862V9.38737C8.99993 9.27319 8.96565 9.16164 8.90158 9.06712C8.83752 8.97261 8.74661 8.89945 8.64057 8.85709Z"
      stroke="#6E7787"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const ShareIcon = (props) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.429 8.71436L10.429 11.5715C10.429 11.8746 10.3086 12.1653 10.0943 12.3796C9.87993 12.5939 9.58924 12.7144 9.28613 12.7144L2.42899 12.7144C2.12589 12.7144 1.8352 12.5939 1.62087 12.3796C1.40654 12.1653 1.28613 11.8746 1.28613 11.5715L1.28613 5.85721C1.28613 5.55411 1.40654 5.26342 1.62087 5.04909C1.8352 4.83476 2.12589 4.71436 2.42899 4.71436L4.14328 4.71436"
      stroke="white"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M5.28613 9.28558C5.28613 7.77005 5.88817 6.3166 6.95981 5.24496C8.03144 4.17333 9.4849 3.57129 11.0004 3.57129L12.7147 3.57129"
      stroke="white"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
    />
    <path
      d="M10.4287 5.85707L12.7144 3.57136L10.4287 1.28564"
      stroke="white"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const PenIcon = (props) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.14258 3L10.9997 5.85714"
      stroke="#565E6C"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
    />
    <path
      d="M5.28613 11.5715L1.28613 12.7143L2.42899 8.71432L9.5227 1.6206C9.96899 1.17432 10.6924 1.17432 11.1387 1.6206L12.3798 2.86175C12.8261 3.30803 12.8261 4.03146 12.3798 4.47775L5.28613 11.5715Z"
      stroke="#565E6C"
      strokeWidth="1.37143"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

export {
  ShareIcon,
  UsersIcon,
  LinkIcon,
  CalendarIcon,
  TaskIcon,
  Reports,
  Ticket,
  Icon1,
  Icon2,
  Icon3,
  Plus,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Clock,
  Pen,
  Close,
  CInfo,
  ArrowRight2,
  ArrowUp,
  User,
  ArrowUp2,
  ArrowDown2,
  FullViewIcon,
  GeoLocation,
  TimeIcon,
  UserIcon,
  PenIcon,
};
