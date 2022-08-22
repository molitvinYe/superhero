const getHeight = (element: HTMLElement, type?: string) => {
  const itemHeight: number = element.offsetHeight;
  if (type === "half") {
    const halfItemHeight = itemHeight / 2;
    return `${halfItemHeight}px`;
  }
  return `${itemHeight}px`;
};

export default getHeight