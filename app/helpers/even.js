import { helper } from '@ember/component/helper';

export default helper(function even([num]/*, hash*/) {
  return num % 2 === 0;
});
