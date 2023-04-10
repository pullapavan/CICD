/**
 * These hooks re-implement the now removed useBlocker and usePrompt hooks in 'react-router-dom'.
 * Thanks for the idea @piecyk https://github.com/remix-run/react-router/issues/8139#issuecomment-953816315
 * Source: https://github.com/remix-run/react-router/commit/256cad70d3fd4500b1abcfea66f3ee622fb90874#diff-b60f1a2d4276b2a605c05e19816634111de2e8a4186fe9dd7de8e344b65ed4d3L344-L381
 */
import { useContext, useEffect, useCallback, useState } from "react";
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";
// import {
//   useBeforeUnload as _useBeforeUnload,
//   unstable_usePrompt as usePrompt,
// } from "react-router-dom";

/**
 * Blocks all navigation attempts. This is useful for preventing the page from
 * changing until some condition is met, like saving form data.
 *
 * @param  blocker
 * @param  when
 * @see https://reactrouter.com/api/useBlocker
 */
// export function useBlocker(blocker, when = true) {
//   const { navigator } = useContext(NavigationContext);

//   useEffect(() => {
//     if (!when) return;

//     const unblock = navigator.block((tx) => {
//       const autoUnblockingTx = {
//         ...tx,
//         retry() {
//           // Automatically unblock the transition so it can play all the way
//           // through before retrying it. TODO: Figure out how to re-enable
//           // this block if the transition is cancelled for some reason.
//           unblock();
//           tx.retry();
//         },
//       };

//       blocker(autoUnblockingTx);
//     });

//     return unblock;
//   }, [navigator, blocker, when]);
// }
/**
 * Prompts the user with an Alert before they leave the current screen.
 *
 * @param  message
 * @param  when
 */
// export function usePrompt(message, when = true) {
//   const blocker = useCallback(
//     (tx) => {
//       // eslint-disable-next-line no-alert
//       if (window.confirm(message)) tx.retry();
//     },
//     [message]
//   );

//   useBlocker(blocker, when);
// }

// export default function useBeforeUnload(doBlock) {
//   _useBeforeUnload(
//     useCallback(
//       (e) => {
//         if (doBlock) {
//           e.preventDefault();
//           return (e.returnValue = "");
//         }
//       },
//       [doBlock]
//     )
//   );

//   usePrompt({
//     when: doBlock,
//     message: "Discard unsaved changes?",
//   });
// }



export const usePrompt = () => {
  const [shouldBlockNavigation, setShouldBlockNavigation] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (shouldBlockNavigation) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    const handleRouteChange = (location) => {
      if (shouldBlockNavigation && !window.confirm("Changes mage")) {
        location.preventDefault();
      }
    };

    if (true) {
      window.addEventListener('beforeunload', handleBeforeUnload);
      window.addEventListener('popstate', handleRouteChange);
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [shouldBlockNavigation]);

  const enableBlocking = () => setShouldBlockNavigation(true);
  const disableBlocking = () => setShouldBlockNavigation(false);

  return { enableBlocking, disableBlocking };
};

export default usePrompt;
