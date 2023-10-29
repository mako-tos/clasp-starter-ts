import m from "mithril";
interface State {
  focusId: string;
  data: { [key: string]: any };
  set(key: string, value: any): void;
  get(key: string): any;
  setFocus(id: string): void;
}
const myState: State = {
  focusId: "",
  data: {},
  set(key, value) {
    myState.data[key] = value;
  },
  get(key) {
    return myState.data[key];
  },
  setFocus(id) {
    myState.focusId = id;
  },
};
interface InputAttrs {
  id: string;
  type: "number" | "text" | "date" | "time";
  max?: number;
  min?: number;
  step?: number;
  noLabel?: boolean;
  required?: boolean;
}
interface ButtonAttrs {
  id: string;
  type: "button" | "submit";
  onclick?: Function;
  label?: string;
}
class MyButton implements m.ClassComponent<ButtonAttrs> {
  view(vnode: m.CVnode<ButtonAttrs>) {
    const attrs = vnode.attrs;
    const onclick = attrs.onclick ? attrs.onclick : () => {};
    const label = attrs.label ? attrs.label : attrs.id;
    return m("button", { id: attrs.id, onclick, type: attrs.type }, label);
  }
}

class Page implements m.ClassComponent {
  view() {
    const attrs: ButtonAttrs = { id: "test", type: "button" };
    const inputAttrs: InputAttrs = { id: "test2", type: "date" };
    return [
      m(MyButton, attrs),
      m(InputComponent, { ...inputAttrs, ...myState }),
    ];
  }
}
const InputComponent: m.Component<InputAttrs, State> = {
  view({ attrs, state }) {
    const inputAttrs: any = {
      id: attrs.id,
      name: attrs.id,
      class: "input",
      type: state.focusId === attrs.id ? attrs.type : "text",
    };
    inputAttrs.onforcus = () => {
      state.setFocus(attrs.id);
    };
    inputAttrs.onblur = () => {
      state.setFocus("");
    };
    inputAttrs.onChange = (e: InputEvent) => {
      if (!!e.data) {
        if (attrs.type === "number") {
          state.set(attrs.id, Number(e.data).toLocaleString());
        } else {
          state.set(attrs.id, e.data);
        }
      } else {
        state.set(attrs.id, null);
      }
    };
    if (attrs.required) {
      inputAttrs.required = true;
    }
    if (attrs.noLabel) {
      return m("input", inputAttrs);
    }
    return m(".container", [m("input", inputAttrs), m("label", attrs.id)]);
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("body")!;
  m.mount(root, Page);
});
