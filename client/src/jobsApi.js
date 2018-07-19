/*import axios from "axios";

const jobsService = axios.create({
  baseURL:
    "https://api.meetup.com/2/events?key=42275f242486224a7a23785773e51&group_urlname="
  //"https://jobs.github.com/positions.json?description="
});
//42275f242486224a7a23785773e51
const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  eventsService: jobsService,

  getJobs(searchTerm) {
    return jobsService
      .get(searchTerm + "&language=en")
      .then(
        res =>
          //console.log("jobsapi call", res);
          res.data
      )
      .catch(errHandler);
  }
};
*/
