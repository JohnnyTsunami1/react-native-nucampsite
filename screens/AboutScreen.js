import { Card } from "react-native-elements";
import { ScrollView, ListItem, Avatar } from "react-native-gesture-handler";
import { PARTNERS } from "../shared/partners";

const AboutScreen = () => {
    const [partners, setPartners] = useState(PARTNERS);

    return (
        <ScrollView>
            <Mission>
                <Card>
                    <Card.Title>Our Mission</Card.Title>
                        <Card.Divider>
                            <Text style={{margin: 10}}>
                                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
                            </Text>
                        </Card.Divider>
                </Card>
            </Mission>
            <Card>
                <Card.Title>Community Partners</Card.Title>
                <Card.Divider />
                    {partners.map = (partners) => {
                        return (
                            <ListItem>
                                <Avatar source={partners.image} rounded />
                                <ListItem.Content>
                                    <ListItem.Title>{partner.name}</ListItem.Title>
                                    <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                            
                        )}};
            </Card>
        </ScrollView>
    )
};


export default AboutScreen;