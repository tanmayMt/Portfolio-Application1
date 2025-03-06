// import { Timeline, useMatches } from "@mantine/core";
// import { IconSchool } from "@tabler/icons-react";
// import { EducationInfo } from "../User";

// const TimelineItem = (items: any) => {
//     const size = useMatches({
//         xs: 15,
//         md: 20,
//     });

//     return items.map((item: any, index: number) => (
//         <Timeline.Item
//             data-aos="fade-up"
//             data-aos-duration="800"
//             key={index}
//             className="!pt-12 !mb-2 sm-mx:!p-1"
//             bullet={<IconSchool className="!text-bgColor" size={size} />}
//         >
//             <div className="border shadow-[0_0_10px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out flex flex-col gap-2 border-primaryColor p-4 rounded-2xl sm-mx:p-2">
//                 <div className="text-white text-2xl font-semibold sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base">
//                     {item.degree}
//                 </div>
//                 <div className="text-lg font-semibold text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
//                     {item.university} &#x2022; {item.year}
//                 </div>
//                 {item.percentage && (
//                     <div className="text-textColor leading-6 text-justify md-mx:text-sm xs-mx:text-xs">
//                         <strong>Percentage:</strong> {item.percentage}
//                     </div>
//                 )}
//                 {item.dgpa && (
//                     <div className="text-textColor leading-6 text-justify md-mx:text-sm xs-mx:text-xs">
//                         <strong>DGPA:</strong> {item.dgpa}
//                     </div>
//                 )}
//             </div>
//         </Timeline.Item>
//     ));
// };

// const Education = () => {
//     const size = useMatches({
//         xs: 15,
//         md: 20,
//     });
//     const dot = useMatches({
//         xs: 25,
//         md: 30,
//     });

//     return (
//         <div
//             className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono"
//             id="Education"
//         >
//             <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
//                 <span className="text-primaryColor">03.&nbsp;</span>Education
//             </h1>
//             <Timeline color="#64FFDA" active={2} bulletSize={dot} lineWidth={2}>
//                 {TimelineItem(EducationInfo)}
//                 <Timeline.Item
//                     bullet={<IconSchool className="!text-bgColor" size={size} />}
//                 ></Timeline.Item>
//             </Timeline>
//         </div>
//     );
// };

// export default Education;



import { Timeline, useMatches } from "@mantine/core";
import { IconSchool } from "@tabler/icons-react";
import { EducationInfo } from "../User";

const TimelineItem = (items: any) => {
    const size = useMatches({
        xs: 15,
        md: 20,
    });

    return items.map((item: any, index: number) => (
        <Timeline.Item
            data-aos="fade-right"
            data-aos-duration="800"
            key={index}
            className="!pt-10 !mb-4 sm-mx:!p-1"
            bullet={<IconSchool className="!text-educationBulletColor" size={size} />}
        >
            <div className="border shadow-[0_0_15px_0_#FFA72650] hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col gap-4 border-educationBorderColor bg-educationBg p-6 rounded-xl sm-mx:p-3">
                <div className="text-educationTitleColor text-2xl font-bold sm-mx:text-xl xs-mx:text-lg">
                    {item.degree}
                </div>
                <div className="text-lg font-medium text-educationSubTitleColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
                    {item.university} &#x2022; {item.year}
                </div>
                {item.percentage && (
                    <div className="text-educationTextColor leading-6 text-justify md-mx:text-sm xs-mx:text-xs">
                        <strong>Percentage:</strong> {item.percentage}
                    </div>
                )}
                {item.dgpa && (
                    <div className="text-educationTextColor leading-6 text-justify md-mx:text-sm xs-mx:text-xs">
                        <strong>DGPA:</strong> {item.dgpa}
                    </div>
                )}
            </div>
        </Timeline.Item>
    ));
};

const Education = () => {
    const size = useMatches({
        xs: 15,
        md: 20,
    });
    const dot = useMatches({
        xs: 25,
        md: 30,
    });

    return (
        <div
            className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-sans"
            id="Education"
        >
            <h1 className="text-4xl  sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
                Education
            </h1>
            <Timeline color="#FFA726" active={2} bulletSize={dot} lineWidth={3}>
                {TimelineItem(EducationInfo)}
                <Timeline.Item
                    bullet={<IconSchool className="!text-educationBulletColor" size={size} />}
                ></Timeline.Item>
            </Timeline>
        </div>
    );
};

export default Education;
