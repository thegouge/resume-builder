export default function Loading() {
  return (
    <div
      className="relative h-full w-full z-50 flex justify-center items-center"
      data-test="ALoadingSpinner"
    >
      <div className="animate-spin py-10">
        <slot>
          <div
            style={{ borderTopColor: 'transparent' }}
            className="default-spinner mx-auto w-16 h-16 border-4 border-solid rounded-full"
          ></div>
        </slot>
      </div>
    </div>
  )
}
