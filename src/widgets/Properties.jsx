import Text from '@/shared/primitives/Text.jsx';

function Properties({ properties }) {
  return (
    <div className="w-full md:w-96 flex flex-col gap-10 rounded-3xl flex-shrink-0 bg-black/5 dark:bg-white/10 p-6">
      {properties ? (
        properties.map((propertyCategory) => (
          <div className="w-full flex flex-col gap-6">
            <div className="w-full p-3 bg-black/[0.06] dark:bg-white/10 rounded-2xl flex justify-center ">
              <Text
                tag="h5"
                className="font-semibold select-text"
                content={propertyCategory.title}
              />
            </div>

            <div className="w-full flex flex-col gap-4">
              {propertyCategory.content.map((property) => (
                <div className="w-full flex flex-row gap-2">
                  <div className="w-[40%] flex flex-shrink-0">
                    <Text
                      tag="h5"
                      className="font-semibold select-text"
                      content={property.propTitle}
                    />
                  </div>
                  <Text
                    tag="h5"
                    className="font-normal opacity-80 select-text"
                    content={property.propContent}
                  />
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div />
      )}
    </div>
  );
}

export default Properties;
