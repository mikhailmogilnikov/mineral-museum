import Text from '@/shared/primitives/Text.jsx';

function Properties({ properties }) {
  return (
    <div className="w-full md:w-96 h-min flex flex-col gap-10 rounded-3xl flex-shrink-0 bg-white dark:bg-white/[0.08] shadow-base p-6">
      {properties ? (
        properties.map((propertyCategory) => (
          <div
            key={`category:${propertyCategory.title}`}
            className="w-full flex flex-col gap-6"
          >
            <div className="w-full p-3 bg-black/[0.06] dark:bg-white/[0.07] rounded-2xl flex justify-center ">
              <Text
                tag="h5"
                className="font-semibold select-text"
                content={propertyCategory.title}
              />
            </div>

            <div className="w-full flex flex-col gap-4 px-1">
              {propertyCategory.content.map((property) => (
                <div
                  key={`property:${property.propTitle}`}
                  className="w-full flex flex-row gap-2"
                >
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
        <Text tag='h5' className='opacity-70' content='Свойства отсутствуют' />
      )}
    </div>
  );
}

export default Properties;
