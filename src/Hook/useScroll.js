const scroll = (ref) => {
  window.scroll({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });
};

export default scroll;
