import { AsideType, ASIDE_TYPES, TeamMember } from "@/types";
import { getRoot, types } from "mobx-state-tree";

type Maybe<T> = T | undefined;

export const AsideStore = types
  .model({
    type: types.maybe(types.enumeration(ASIDE_TYPES)),
    stack: types.optional(types.array(types.frozen()), []),
    csvContext: types.maybe(types.string),
    isClosed: types.optional(types.boolean, true),
    context: types.maybe(types.frozen()),
  })
  .actions((store) => ({
    setAside(type: Maybe<AsideType>, csvContext?: string, context?: any) {
      if (store.type) {
        store.stack.push({
          type: store.type,
          csvContext: store.csvContext,
          context: {
            ...store.context,
            memberToEdit: context?.memberToEdit || store.context?.memberToEdit,
          },
        });
      }

      store.type = type;
      store.csvContext = csvContext;
      store.context = context;
      store.isClosed = false;
      if (context?.memberToEdit) {
        const rootStore = getRoot(store) as any; // Ajusta `any` según tu definición de rootStore
        rootStore.members.setMemberToEdit(context.memberToEdit);
      }
    },
    popAside(members: TeamMember[]) {
      const lastAside = store.stack.pop();
      if (lastAside) {
        store.type = lastAside.type;
        store.csvContext = lastAside.csvContext;
        store.context = lastAside.context;

        const rootStore = getRoot(store) as any; // Accede a la raíz del estado

        // Restaurar `originalMember` desde el contexto
        if (lastAside.context?.originalMember) {
          const restoredMember = members.find(
            (member) => member._id === lastAside.context.originalMember._id
          );
          if (restoredMember) {
            store.context.originalMember = restoredMember;
          }
        }

        // Restaurar `memberToEdit`
        if (lastAside.context?.memberToEdit) {
          const updatedMemberToEdit = members.find(
            (member) => member._id === lastAside.context.memberToEdit
          );
          if (updatedMemberToEdit) {
            rootStore.members.setMemberToEdit(updatedMemberToEdit._id);
          }
        }

        return lastAside;
      } else {
        this.closeAside();
        return null;
      }
    },
    clearStack() {
      store.stack.clear();
    },
    closeAside() {
      store.type = undefined;
      store.stack.clear();
      store.context = undefined;
      store.isClosed = true;
    },
  }));
