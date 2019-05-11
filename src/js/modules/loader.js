

export default function loader(isLoading) {
  const $loader = $(".cybersolution-page__overlay");
  if (isLoading) {
    $loader.show()
  } else {
    $loader.hide();
  }
}