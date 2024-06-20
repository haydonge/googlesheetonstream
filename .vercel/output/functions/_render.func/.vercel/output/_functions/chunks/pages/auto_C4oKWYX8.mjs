/* empty css                       */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_DvdZoOsb.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$BaseLayout } from './ae_CH2DiUZ8.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$AutoWorkCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AutoWorkCard;
  const { data } = Astro2.props;
  const startDate = new Date(data.startdate);
  const endDate = new Date(data.enddate);
  const timeDifference = endDate.getTime() - startDate.getTime();
  const dayDifference = timeDifference / (1e3 * 3600 * 24);
  const currentDate = /* @__PURE__ */ new Date();
  const overdue = endDate < currentDate;
  const cardStyle = dayDifference < 3 || overdue ? "bg-red-200" : "bg-green-200";
  const showLogo = data.priority === "\u6025";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`card ${cardStyle} shadow-md hover:shadow-xl transition-shadow duration-300 relative`, "class")} data-astro-cid-msqdqfkn> ${showLogo && renderTemplate`<div class="absolute top-0 right-0 m-1" data-astro-cid-msqdqfkn> ${renderComponent($$result, "Icon", $$Icon, { "name": "logo23", "size": 80, "class": "text-red-500", "data-astro-cid-msqdqfkn": true })} </div>`} <div class="title font-bold mb-2" data-astro-cid-msqdqfkn>申请人: ${data.requestor}</div> <div data-astro-cid-msqdqfkn>工单号码: ${data.workorder}</div> <div data-astro-cid-msqdqfkn>week: ${data.week}</div> <div data-astro-cid-msqdqfkn>责任人：${data.owner}</div> <div data-astro-cid-msqdqfkn>客户： ${data.customer}</div> <div data-astro-cid-msqdqfkn>任务: ${data.works}</div> <div data-astro-cid-msqdqfkn>申请日期: ${new Date(data.startdate).toLocaleDateString()}</div> <div data-astro-cid-msqdqfkn>需求日期: ${new Date(data.enddate).toLocaleDateString()}</div> <div data-astro-cid-msqdqfkn>状态：${data.status}</div> </div> `;
}, "D:/demo/googlesheetonstream/src/components/AutoWorkCard.astro", void 0);

const $$Astro = createAstro();
const GET = (data) => {
  return new Response(
    JSON.stringify({
      message: "This was a GET!"
    })
  );
};
const $$Auto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Auto;
  const response = await fetch(
    "https://opensheet.elk.sh/1ge-pyzr0uMTxlALiiUh_sEzdVo1ikGJGavLF04u6AVU/5"
  );
  const data = await response.json();
  const filteredData = data.filter((item) => (item.Status === "On Going" || item.Status === "Delay") && item.Priority === "\u6025").map((item) => ({
    week: item.week,
    workorder: item.item,
    requestor: item.Requester,
    owner: item.Owner,
    customer: item.Customer,
    works: item.Actions,
    startdate: item.StartDate,
    enddate: item.DueDate,
    status: item.Status,
    priority: item.Priority
  }));
  const filteredData2 = data.filter((item) => (item.Status === "On Going" || item.Status === "Delay") && item.Priority !== "\u6025").map((item) => ({
    week: item.week,
    workorder: item.item,
    requestor: item.Requester,
    owner: item.Owner,
    customer: item.Customer,
    works: item.Actions,
    startdate: item.StartDate,
    enddate: item.DueDate,
    status: item.Status,
    priority: item.Priority
  }));
  if (!data) {
    return {
      status: 404
    };
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-2"> ${filteredData.map((data2) => renderTemplate`${renderComponent($$result2, "AutoWorkCard", $$AutoWorkCard, { "data": data2 })}`)} ${filteredData2.map((data2) => renderTemplate`${renderComponent($$result2, "AutoWorkCard", $$AutoWorkCard, { "data": data2 })}`)} </main> ` })} <!-- 
<style>
  .card-container {
      display: flex;
      flex-wrap: wrap; /* 这里设置 flex-wrap: wrap; 让卡片容器可以换行 */
      justify-content: space-between /* 这里可以调整卡片在行内的对齐方式，我设置为 space-between，让卡片之间的间隔尽可能平均 */
    }
  
</style> -->`;
}, "D:/demo/googlesheetonstream/src/pages/auto.astro", void 0);

const $$file = "D:/demo/googlesheetonstream/src/pages/auto.astro";
const $$url = "/auto";

export { GET, $$Auto as default, $$file as file, $$url as url };
