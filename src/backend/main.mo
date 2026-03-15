import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";

actor {
  public type Submission = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, email : Text, message : Text) : async () {
    let newSubmission : Submission = {
      name;
      phone;
      email;
      message;
      timestamp = Time.now();
    };
    submissions.add(newSubmission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.toArray();
  };
};
