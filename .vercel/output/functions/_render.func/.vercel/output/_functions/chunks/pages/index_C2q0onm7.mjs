/* empty css                       */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_DvdZoOsb.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './ae_CH2DiUZ8.mjs';

const $$Astro = createAstro();
const GET = (data) => {
  return new Response(
    JSON.stringify({
      message: "This was a GET!"
    })
  );
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const response = await fetch(
    "https://opensheet.elk.sh/1ge-pyzr0uMTxlALiiUh_sEzdVo1ikGJGavLF04u6AVU/1"
  );
  const data = await response.json();
  if (!data) {
    return {
      status: 404
    };
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto my-6 text-center"> <div class="mt-10"> <h2 class="text-2xl font-semibold">功能介绍</h2> <p class="mt-4 text-lg">在这里，您可以追踪和管理所有的工单，查看详细信息和状态更新。</p> <ul class="mt-6 list-disc list-inside text-left mx-auto max-w-2xl"> <li class="mb-2"> <strong>工单创建与分配:</strong> 简单快捷地创建新工单，并将其分配给适当的团队成员。
</li> <li class="mb-2"> <strong>实时状态更新:</strong> 实时跟踪工单的进展情况，确保所有相关人员及时了解最新状态。
</li> <li class="mb-2"> <strong>记录与报告:</strong> 仅仅追踪“ 未完成，Ongiing, Delay等状态" 。OverDue，或 接近3天内的项目变色追踪。“急” 只能添加“急”作为标识符。
</li> </ul> </div> </main> ` })}`;
}, "D:/demo/googlesheetonstream/src/pages/index.astro", void 0);

const $$file = "D:/demo/googlesheetonstream/src/pages/index.astro";
const $$url = "";

export { GET, $$Index as default, $$file as file, $$url as url };
