import SC from 'npm:soundcloud';

export function initialize() {
  SC.initialize({
    client_id: 'b42fce0c05bc046484daed8a1de48bd8',
  });
}

export default {
  name: 'soundcloud',
  initialize
};
