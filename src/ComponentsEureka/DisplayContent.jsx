/* eslint-disable react/prop-types */

import { Suspense } from "react";

// import { fadeIn, textVariant } from "../utils/motion";

const DisplayContent = ({ portals }) => {
  return (
    <>
      <section className=" bg-background-950  ">
        <div className="ml-6 py-6 px-4">
          <h2 className="text-text-100 font-bold shadow-md text-center mb-4 md:text-[55px] sm:text-[40px] text-[30px] font-OpenSans pt-2 ">
            Your Content
          </h2>
          {portals && Array.isArray(portals) ? (
            portals.map((portal, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-text-100 font-bold shadow-md text-xl">
                  Portal ID: {portal.portal_details.portal_id}
                </h3>

                {portal.portal_conent &&
                Array.isArray(portal.portal_conent) &&
                portal.portal_conent.length > 0 ? (
                  <div className="mt-3">
                    {portal.portal_conent.map((content, contentIndex) => (
                      <div key={contentIndex}>
                        <p className="text-text-100 text-mb shadow-md mb-3">
                          Content Type: {content.content_type}
                        </p>

                        {content.content_type === "text" && (
                          <p className=" max-w-3xl leading-[30px] text-text-100 mb-2 ">
                            {content.content}
                          </p>
                        )}
                        {content.content_type === "pdf" && (
                          <a
                            className=" bg-secondary-600 py-1 px-4 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800 mt-2 mb-2"
                            href={content.content}
                            target="_blank"
                            rel="noopener noreferrer">
                            View PDF
                          </a>
                        )}

                        {content.content_type === "video" && (
                          <video controls width="300" height="200">
                            <source src={content.content} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                        {content.content_type === "image" && (
                          <Suspense fallback={<div>Loading...</div>}>
                            <img
                              className="h-[350px] w-[350px]"
                              src={content.content}
                              alt="content"
                              onClick={() => {
                                window.open(content.content);
                              }}
                            />
                          </Suspense>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-text-100 font-bold shadow-md">
                    You have not Uploaded anything yet
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-text-100 font-bold shadow-md">
              No data available
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default DisplayContent;
