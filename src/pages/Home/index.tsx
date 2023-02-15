import AuctionCard from "../../components/AuctionCard";
import { Container } from "./style";

const HomePage = () => {
    return (
        <Container>
            <section className="section__card--auction">
                <h2 className="h2__card--auction">Leilão</h2>
                <div className="div__card--auction">
                    <AuctionCard img="https://cdn-icons-png.flaticon.com/512/21/21104.png" name="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 " description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..." km="0" owner="Rodrigo Tavares" price="110000" year="2019"/>
                    <AuctionCard img="https://i.pinimg.com/originals/24/13/73/241373ff7d3ad9202834eb7428ba4750.jpg" name="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 " description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..." km="0" owner="Rodrigo Tavares" price="110000" year="2019"/>
                    <AuctionCard img="https://www.mensjournal.com/wp-content/uploads/m0516_nb_cartech_a-e64f3b6c-97be-4dac-8c8b-322ce8b7280b.jpg?w=1200&crop=0px%2C200px%2C2548px%2C1432px&resize=1200%2C675&quality=82&strip=all" name="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 " description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..." km="0" owner="Rodrigo Tavares" price="110000" year="2019"/>
                    <AuctionCard img="https://i.pinimg.com/originals/e4/d6/8f/e4d68fd0d62bcafceb8642039876e6fe.jpg" name="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 " description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..." km="0" owner="Rodrigo Tavares" price="110000" year="2019"/>
                    <AuctionCard img="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_180,pg_1,q_80,w_320/4bbe8bdf0b2fa3c74d56ac1079f6e92f.jpg" name="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 " description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..." km="0" owner="Rodrigo Tavares" price="110000" year="2019"/>
                    
                </div>
            </section>
        </Container>
    )
}

export default HomePage;