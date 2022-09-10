export const stopBubbling = (e: unknown) => {
  if ((e as Event).stopPropagation) {
    const castedEvent = e as Event;
    castedEvent.stopPropagation();
  }
};
