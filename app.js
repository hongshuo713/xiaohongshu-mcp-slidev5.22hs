const inputText =
  document.getElementById(
    "inputText",
  );
const outputText =
  document.getElementById(
    "outputText",
  );
const templateSel =
  document.getElementById(
    "template",
  );
const copyBtn =
  document.getElementById(
    "copyBtn",
  );

const templates = {
  general: {
    titleIcon: "✨",
    tag: "\n#干货分享 #小红书运营 #笔记排版",
  },
  study: {
    titleIcon: "📚",
    tag: "\n#学习打卡 #自律提升 #知识分享",
  },
  food: {
    titleIcon: "🍜",
    tag: "\n#美食探店 #日常吃喝 #好物安利",
  },
};

function changeContent() {
  let text = inputText.value;
  let type =
    templateSel.value;
  let tpl = templates[type];

  text = text.replace(
    /^#\s(.+)$/gm,
    `${tpl.titleIcon} $1\n`,
  );
  text = text.replace(
    /^\d+\.\s(.+)$/gm,
    "1️⃣ $1",
  );
  text = text.replace(
    /^-\s(.+)$/gm,
    "▪️ $1",
  );

  let res = text + tpl.tag;
  outputText.innerText = res;
}

inputText.addEventListener(
  "input",
  changeContent,
);
templateSel.addEventListener(
  "change",
  changeContent,
);

copyBtn.addEventListener(
  "click",
  () => {
    let text =
      outputText.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(
          "复制成功！直接去小红书粘贴即可",
        );
      });
  },
);
